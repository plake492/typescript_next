import { useEffect, useState } from 'react'
import React from 'react'
import Image from 'next/image'

interface ImageComponent {
  width: number
  height?: number
  src: string
  isLandscape?: boolean
  alt?: string
  staticImg?: boolean
  priority?: boolean
}

export const ImageComponent: React.FC<ImageComponent> = ({
  width,
  height,
  src,
  isLandscape = true,
  alt = '',
  staticImg = true,
  priority = false
}: ImageComponent): JSX.Element => {
  const [calculatedHeight, setCalculatedHeight] = useState<number>(0)

  useEffect((): void => {
    if (!height)
      if (isLandscape) setCalculatedHeight((width * 9) / 16)
      else setCalculatedHeight((width * 16) / 9)
    else setCalculatedHeight(height)
  }, [width, height, isLandscape])

  return (
    <Image
      src={staticImg ? `/images/${src}` : src}
      width={width}
      height={calculatedHeight}
      alt={alt}
      layout="responsive"
      priority={priority}
    />
  )
}
