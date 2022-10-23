export default function SvgSymbol({ icon, viewBox }: any) {
  return (
    <svg className="icon" viewBox={viewBox}>
      <use xlinkHref={`icons/symbols.svg#${icon}`} />
    </svg>
  )
}
