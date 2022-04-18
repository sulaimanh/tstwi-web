import React, { FC } from 'react'
import Image, { ImageProps } from 'next/image'

export interface ImgProps extends ImageProps {
  size?: string
  className?: string
}

export const Img: FC<ImgProps> = ({
  size,
  className,
  width,
  height,
  alt,
  ...props
}) => (
  <Image
    {...props}
    alt={alt}
    width={size ?? width}
    height={size ?? height}
    className={className}
  />
)
