import React from 'react'
import { useBemify } from '../hooks/useBemify'

interface ShaderProps {
  children: JSX.Element
  img: string
  specularBlend?: string
  maskBlend?: string
}

export const Shader: React.FC<ShaderProps> = ({
  children,
  img,
  specularBlend,
  maskBlend
}: ShaderProps): JSX.Element => {
  const bem = useBemify('shader')
  return (
    <div
      className={bem()}
      style={
        {
          '--specular-blend': specularBlend,
          '--mask-blend': maskBlend
        } as React.CSSProperties
      }
    >
      {children}
      <div className={`${bem('layer')} specular`}>
        <div
          className={`${bem('layer')} mask`}
          style={
            {
              '--image-path': `url(/images/${img})`
            } as React.CSSProperties
          }
        ></div>
      </div>
    </div>
  )
}
