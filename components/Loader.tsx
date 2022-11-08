export default function Loader(): JSX.Element {
  return (
    <div className="line--wrapper">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className={`line line-${i + 1}`}></div>
      ))}
    </div>
  )
}
