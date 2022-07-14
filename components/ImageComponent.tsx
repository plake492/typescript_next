import { useEffect, useState } from 'react'
import React from 'react'
import Image from 'next/image'

interface ImageComponent {
  width?: number
  height?: number
  src: string
  isLandscape?: boolean
  alt?: string
  staticImg?: boolean
  priority?: boolean
  imgBase64?: string
  shader?: JSX.Element
}

export const ImageComponent: React.FC<ImageComponent> = ({
  width,
  height,
  src,
  isLandscape = true,
  alt = '',
  imgBase64,
  staticImg = true,
  priority = false,
  shader
}: ImageComponent): JSX.Element => {
  const [calculatedHeight, setCalculatedHeight] = useState<number>(height || 0)
  const [calculatedWidth, setCalculatedWidth] = useState<number>(width || 0)

  useEffect((): void => {
    if (!height)
      if (isLandscape) setCalculatedHeight((width * 9) / 16)
      else setCalculatedHeight((width * 16) / 9)
    else if (height && !width)
      if (isLandscape) setCalculatedWidth((height * 9) / 16)
      else setCalculatedWidth((width * 16) / 9)
    else setCalculatedHeight(height)
  }, [width, height, isLandscape])

  return (
    <Image
      src={staticImg ? `/images/${src}` : src}
      width={calculatedWidth}
      height={calculatedHeight}
      alt={alt}
      layout="responsive"
      priority={priority}
      placeholder={imgBase64 ? 'blur' : 'empty'}
      blurDataURL={imgBase64 || ''}
    />
  )
}
