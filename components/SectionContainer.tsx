interface SectionContainer {
  title?: string
  bgColor?: string
  children: React.ReactNode
  id?: string
}

export const SectionContainer = function ({
  title,
  bgColor,
  children,
  id
}: SectionContainer): JSX.Element {
  return (
    <section className={`py-xxl ${bgColor || ''}`.trim()} id={id}>
      <div className="container">
        {title ? <h4>{title}</h4> : null}
        {children}
      </div>
    </section>
  )
}
