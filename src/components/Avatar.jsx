// Original doodle: round face, scribbly curls, closed happy eyes.
export default function Avatar({ className, label = 'Yash doodle avatar' }) {
  return (
    <svg className={className} viewBox="0 0 120 120" role="img" aria-label={label}>
      <g fill="none" stroke="#111" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 62c0-20 13-34 30-34s30 14 30 34-12 38-30 38-30-18-30-38z" fill="#fff" />
        <path
          d="M28 58c-6-10 0-22 9-22-2-10 10-16 17-10 4-9 18-9 22 0 8-5 19 2 16 11 9 1 13 13 6 21-3-8-10-12-16-12-3 5-10 7-16 3-6 5-14 4-17-2-7 2-15 4-21 11z"
          fill="#111"
        />
        <path d="M44 70q5-6 10 0M66 70q5-6 10 0" />
        <path d="M52 84q8 7 16 0" />
        <path d="M30 70q-7 2-5 9t8 4M90 70q7 2 5 9t-8 4" fill="#fff" />
      </g>
      <circle cx="41" cy="80" r="4" fill="#e79aa3" />
      <circle cx="79" cy="80" r="4" fill="#e79aa3" />
    </svg>
  )
}
