import { conditionalClasses } from '../utils/helpers'

interface HeroProps {
  children: JSX.Element
  content?: JSX.Element
  hasAngle?: boolean
  contentIsCentered?: boolean
}
export const Hero = ({
  children,
  content,
  hasAngle,
  contentIsCentered
}: HeroProps) => {
  return (
    <div
      className={`box-shadow  position-relative ${conditionalClasses([
        hasAngle,
        'angle-left-right'
      ])}`}
    >
      {children}

      <div
        className={`position-absolute top-25 left-50 container w-100 absolute-center ${conditionalClasses(
          [contentIsCentered, 'top-50', 'top-25']
        )}`}
      >
        {content}
      </div>
    </div>
  )
}
