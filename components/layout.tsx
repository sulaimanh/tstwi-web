import { FC, ReactElement } from 'react'

const Layout: FC<{ children: ReactElement | ReactElement[] }> = ({
  children,
}) => {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}

export { Layout }
