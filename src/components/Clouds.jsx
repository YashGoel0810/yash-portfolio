// Painted daytime sky behind the contact section. Slightly taller than the section so
// the parent can slide it up as you scroll in, which makes the clouds rise.
export default function Clouds({ style }) {
  return (
    <div className="sky" style={style} aria-hidden="true">
      <img src={`${import.meta.env.BASE_URL}sky.jpg`} alt="" width="1536" height="1024" loading="lazy" decoding="async" />
    </div>
  )
}
