import { ReactElement } from 'react'

export interface ContainerProps {
  className?: string
  children: ReactElement | ReactElement[] | undefined
}

export function Container({
  children,
  className,
}: ContainerProps): ReactElement {
  return (
    <div
      className={`container lg:px-20 xl:px-52 2xl:px-64 mx-auto px-5 sm:px-10 ${className}`}
    >
      {children}
    </div>
  )
}
