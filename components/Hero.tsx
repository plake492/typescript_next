interface HeroProps {
  children: JSX.Element
  content?: JSX.Element
}
export const Hero = ({ children, content }: HeroProps) => {
  return (
    <div className="box-shadow angle-left-right position-relative">
      {children}

      <div className="position-absolute top-25 left-50 container w-100 absolute-center">
        {content}
      </div>
    </div>
  )
}
