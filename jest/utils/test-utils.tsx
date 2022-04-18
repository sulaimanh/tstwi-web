import React, { FC, ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

const AllTheProviders: FC = ({ children }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export type ComponentSetupTestFunction<Props = {}, Misc = {}> = (
  props?: Partial<Props>,
  misc?: Partial<Misc>,
) => ComponentTestSetupObject<Props>

export interface ComponentTestSetupObject<Props> {
  props?: Partial<Props>
  renderResult: RenderResult
}

export * from '@testing-library/react'
export { customRender as render }
