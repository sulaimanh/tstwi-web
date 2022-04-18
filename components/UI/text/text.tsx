import React, { ReactElement, ReactNode } from 'react'

interface TextProps {
  children: string | ReactNode | JSX.Element | JSX.Element[]
  className?: string
  onClick?: () => void
}

export function H1({ children, className, onClick }: TextProps): ReactElement {
  return (
    <h1
      onClick={onClick}
      className={`text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-tight md:pr-8 ${className}`}
    >
      {children}
    </h1>
  )
}

export function H2({ children, className, onClick }: TextProps): ReactElement {
  return (
    <h2
      onClick={onClick}
      className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:pr-8 ${className}`}
    >
      {children}
    </h2>
  )
}

export function H3({ children, className, onClick }: TextProps): ReactElement {
  return (
    <h3
      onClick={onClick}
      className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight md:pr-8 ${className}`}
    >
      {children}
    </h3>
  )
}

export function H4({ children, className, onClick }: TextProps): ReactElement {
  return (
    <h4
      onClick={onClick}
      className={`text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-tight md:pr-8 ${className}`}
    >
      {children}
    </h4>
  )
}

export function H5({ children, className, onClick }: TextProps): ReactElement {
  return (
    <h5
      onClick={onClick}
      className={`text-lg md:text-xl lg:text-2xl font-bold tracking-tight leading-tighT ${className}`}
    >
      {children}
    </h5>
  )
}

export function P({ children, className, onClick }: TextProps): ReactElement {
  return (
    <p
      onClick={onClick}
      className={`text-md sm:text-lg leading-relaxed ${className}`}
    >
      {children}
    </p>
  )
}

export function MP({ children, className, onClick }: TextProps): ReactElement {
  return (
    <p
      onClick={onClick}
      className={`text-sm sm:text-md leading-relaxed ${className}`}
    >
      {children}
    </p>
  )
}
