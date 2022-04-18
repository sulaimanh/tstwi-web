import React, { ReactElement, useState, useEffect } from 'react'
import { Container, Layout } from 'components'
import { IconLookup, Icons } from 'tstwi'
import { H4, H5, MP, P, Img } from 'UI'

const toKebabCase = (string: string): string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export default function Home(): ReactElement {
  const [search, setSearch] = useState('')
  const [icons, setIcons] = useState(Icons)

  useEffect(() => {
    setIcons(() => {
      const s = toKebabCase(search)
      return Icons.filter((i) => i.includes(s))
    })
  }, [search])

  return (
    <Container>
      <Layout>
        <div className="flex justify-between py-10">
          <H5 className="cursor-pointer hover:text-indigo-500 hover:underline w-max">
            tstwi
          </H5>
          <div
            onClick={(): void => {
              window.open('https://github.com/sulaimanh/tstwi')
            }}
            className="cursor-pointer"
          >
            <Img src="/img/git.png" width="30" height="30" />
          </div>
        </div>
        <div className="flex flex-col justify-between w-full lg:flex-row">
          <div className="relative">
            <div className="relative w-full px-1 py-5 lg:fixed lg:w-[25rem]">
              <div className="pb-5">
                <P>
                  Premium SVG icons from{' '}
                  <span
                    onClick={(): void => {
                      window.open('https://www.zondicons.com/')
                    }}
                    className="font-bold text-indigo-500 cursor-pointer"
                  >
                    ZondIcons
                  </span>{' '}
                </P>
                <P>Built with TypeScript and TailwindCSS</P>
                <P
                  onClick={(): void => {
                    window.open('https://www.npmjs.com/package/tstwi')
                  }}
                  className="p-2 text-indigo-500 bg-gray-200 cursor-pointer rounded-md w-max"
                >
                  npm install tstwi
                </P>
              </div>
              <div className="w-full">
                <H4 className="pb-2 mb-5 border-b border-gray-100">
                  Search for Icon
                </H4>
                <input
                  placeholder="Search"
                  className=" w-full p-2 pl-3 rounded-sm appearance-none focus:outline-none ring-2 ring-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={search}
                  onChange={(e): void => setSearch(e.target.value)}
                />
                <div className="mt-5">
                  <div>
                    <div className="p-5 mb-5 bg-gray-200 rounded-md">
                      <P className="pb-2 font-bold">Props</P>
                      <MP className="mb-2">
                        Use the utility classes for{' '}
                        <span
                          onClick={(): void => {
                            window.open('https://tailwindcss.com/docs/stroke')
                          }}
                          className="font-bold text-indigo-500 underline cursor-pointer"
                        >
                          stroke
                        </span>{' '}
                        and{' '}
                        <span
                          onClick={(): void => {
                            window.open('https://tailwindcss.com/docs/fill')
                          }}
                          className="font-bold text-indigo-500 underline cursor-pointer"
                        >
                          fill
                        </span>{' '}
                        from Tailwindcss
                      </MP>
                      <div className="font-bold">
                        <MP>
                          <span className="font-bold text-red-500">
                            export interface
                          </span>{' '}
                          <span className="font-bold text-orange-500">
                            IconLookupProps
                          </span>{' '}
                          {'{'}
                        </MP>
                        <div className="ml-5">
                          <MP className="font-bold text-green-500">
                            <span className="font-bold text-purple-500">
                              name:
                            </span>{' '}
                            IconTypes
                          </MP>
                          <MP className="font-bold text-green-500">
                            <span className="font-bold text-purple-500">
                              size?:
                            </span>{' '}
                            string
                          </MP>
                          <MP className="font-bold text-green-500">
                            <span className="font-bold text-purple-500">
                              stroke?:
                            </span>{' '}
                            {`stroke-${'{string}'}-${'{number}'}`}
                          </MP>
                          <MP className="font-bold text-green-500">
                            <span className="font-bold text-purple-500">
                              fill?:
                            </span>{' '}
                            {`fill-${'{string}'}-${'{number}'} | 'fill-black' | 'fill-white'`}
                          </MP>
                          <MP className="font-bold text-green-500">
                            <span className="font-bold text-purple-500">
                              className?:
                            </span>{' '}
                            string
                          </MP>
                          <MP className="font-bold text-green-500">
                            <span className="font-bold text-purple-500">
                              onClick?:
                            </span>
                            {' () => void '}
                          </MP>
                        </div>
                        <MP>{'}'}</MP>
                      </div>
                    </div>
                    <div className="p-5 mb-5 font-bold bg-gray-200 rounded-md">
                      <P className="mb-2 font-bold">Component</P>
                      <MP className="mb-2">
                        <span className="text-red-500">import</span>{' '}
                        {'{ IconLookup }'}{' '}
                        <span className="text-red-500">from</span> {'"tstwi"'}
                      </MP>
                      <MP>
                        {'<'}
                        <span className="text-orange-500">IconLookup</span>
                      </MP>
                      <div className="ml-5">
                        <MP>
                          <span className="text-purple-500">name</span>
                          {'=""'}
                        </MP>
                        <MP>
                          <span className="text-purple-500">size</span>
                          {'=""'}
                        </MP>
                        <MP>
                          <span className="text-purple-500">stroke</span>
                          {'=""'}
                        </MP>
                        <MP>
                          <span className="text-purple-500">fill</span>
                          {'=""'}
                        </MP>
                        <MP>
                          <span className="text-purple-500">className</span>
                          {'=""'}
                        </MP>
                        <MP>
                          <span className="text-purple-500">onClick</span>
                          {'={}'}
                        </MP>
                      </div>
                      <MP>{'/>'}</MP>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col w-full lg:w-[25rem]">
            <div className="flex justify-between w-full px-3 py-5 bg-white border-b border-gray-100">
              <H5>Name</H5>
              <H5>Icon</H5>
            </div>
            <div className="w-full">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-4 border-b-2 border-gray-100 hover:bg-gray-100"
                >
                  <div className="">
                    <P className="mr-10">{icon}</P>
                  </div>
                  <div className="">
                    <IconLookup size="50" name={icon} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </Container>
  )
}
