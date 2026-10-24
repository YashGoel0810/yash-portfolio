// Generates the painted sky for the contact section with kie.ai, then saves it to
// public/clouds-painted.png. Reads KIE_API_KEY from site/.env.local (never printed).
// Run from the site folder:  node scripts/gen-clouds.mjs
import { readFileSync, writeFileSync } from 'node:fs'

const env = readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
const KEY = (env.match(/^KIE_API_KEY\s*=\s*"?([^"\n]+)"?/m) || [])[1]?.trim()
if (!KEY) throw new Error('KIE_API_KEY missing from site/.env.local')

const API = 'https://api.kie.ai/api/v1/jobs'
const headers = { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' }

const prompt = [
  'Hand-painted illustration of a bright summer sky full of huge fluffy cumulus clouds.',
  'Soft gouache brushwork, visible painterly strokes, saturated cerulean and cobalt blue sky,',
  'clouds lit warm from the upper left with cream and pale butter-yellow highlights and soft lavender-blue shadows.',
  'Tall billowing cloud banks rise from the bottom edge and frame the left and right sides;',
  'the upper middle of the frame is open blue sky with only a few wisps, leaving room for a headline.',
  'Hazy pale blue near the horizon at the bottom. Animated feature film background art, calm and dreamy.',
  'No people, no birds, no buildings, no land, no text, no watermark.',
].join(' ')

const create = await fetch(`${API}/createTask`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ model: '4o-image-api', input: { prompt, size: '3:2' } }),
}).then((r) => r.json())
if (create.code !== 200) throw new Error(`createTask failed: ${create.code} ${create.msg}`)
const taskId = create.data.taskId
console.log('task', taskId)

let wait = 3000
for (;;) {
  await new Promise((r) => setTimeout(r, wait))
  wait = Math.min(wait * 1.4, 15000)
  const info = await fetch(`${API}/recordInfo?taskId=${encodeURIComponent(taskId)}`, { headers }).then((r) => r.json())
  if (info.code !== 200) throw new Error(`recordInfo failed: ${info.code} ${info.msg}`)
  const d = info.data
  console.log('state', d.state, d.progress ?? '')
  if (d.state === 'fail') throw new Error(`generation failed: ${d.failCode} ${d.failMsg}`)
  if (d.state === 'success') {
    const url = JSON.parse(d.resultJson).resultUrls[0]
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer())
    writeFileSync(new URL('../public/clouds-painted.png', import.meta.url), buf)
    console.log('saved public/clouds-painted.png', buf.length, 'bytes; credits', d.creditsConsumed)
    break
  }
}
