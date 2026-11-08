// Delicate floral branch, drawn once and reused. Style via className / style.
export default function Branch({ className = '', style }) {
  return (
    <svg className={`br ${className}`} style={style} viewBox="0 0 100 300" aria-hidden="true">
      <path d="M50 296C46 220 56 140 50 6" />
      <path d="M49 240C30 232 20 216 14 200M49 240C68 234 80 220 86 204M50 180C32 172 22 156 18 140M50 176C70 168 80 152 84 136M50 118C36 110 28 96 26 82M51 112C66 106 76 94 78 80" />
      <g className="f">
        <circle cx="14" cy="198" r="6" /><circle cx="86" cy="202" r="6" />
        <circle cx="18" cy="138" r="5" /><circle cx="84" cy="134" r="5" />
        <circle cx="26" cy="80" r="4" /><circle cx="78" cy="78" r="4" />
        <circle cx="50" cy="8" r="6" />
      </g>
    </svg>
  )
}
