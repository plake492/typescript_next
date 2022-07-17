import React from 'react'
import { useBemify } from '../hooks/useBemify'
import { conditionalClasses } from '../utils/helpers'

interface Card {
  header?: JSX.Element
  image?: JSX.Element
  content?: JSX.Element
  links?: JSX.Element
  footer?: JSX.Element
  noBorder?: boolean
  bg?: string
  block?: boolean
}

export const Card: React.FC = ({
  header,
  image,
  content,
  links,
  footer,
  noBorder,
  bg,
  block
}: Card): JSX.Element => {
  const bem: Function = useBemify('card')

  return (
    <div
      className={`${bem()} ${conditionalClasses(
        [noBorder, bem('--no-border')],
        [bg, `bg-${bg}`],
        [block, bem('--block')]
      )}`}
    >
      {header && <div className={bem('header')}>{header}</div>}
      {image && (
        <div
          className={bem('image')}
          style={
            !header
              ? ({
                  '--card-offset-height': 'var(--card-border-width)'
                } as React.CSSProperties)
              : null
          }
        >
          {image}
        </div>
      )}
      {content && <div className={bem('content')}>{content}</div>}
      {links && <div className={bem('links')}>{links}</div>}
      {footer && <div className={bem('footer')}>{footer}</div>}
    </div>
  )
}
