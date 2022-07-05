import React, { Dispatch, SetStateAction, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { conditionalClasses } from '../utils/helpers'
import { useGetRoutes } from '../hooks/useGetRoutes'
import { useBemify } from '../hooks/useBemify'
import { Routes } from '../utils/types'

export const Nav = (): JSX.Element => {
  const [showDropdwon, setShowDropdown] = useState(false)
  const bem = useBemify('nav')
  const { pathname } = useRouter()
  const { routes } = useGetRoutes()

  return (
    <nav className={bem()}>
      <div className="bg-midnight position-relative z-2 py-md px-xl d-flex justify-content-between align-items-center">
        <Link href="/">
          <a className="link nav-link link__no-underline">
            <h5>Nav</h5>
          </a>
        </Link>
        <NavDropdownIcon
          active={showDropdwon}
          setShowDropdown={setShowDropdown}
        />
      </div>

      <div
        className={`${bem('dropdown')} ${conditionalClasses([
          showDropdwon,
          'active'
        ])}`}
      >
        <div className="py-md px-xl bg-lake-80 border-bottom box-shadow">
          <ul className="d-flex flex-gap-md justify-content-flex-end align-items-flex-end flex-col flex-md-row">
            {routes?.map(
              ({ path, title }: Routes, index: number): JSX.Element => (
                <li key={path + index} onClick={() => setShowDropdown(false)}>
                  <Link href={path}>
                    <a
                      className={`link nav-link ${conditionalClasses([
                        pathname === path,
                        'link__active'
                      ])}`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export const NavDropdownIcon = ({
  active,
  setShowDropdown
}: {
  active: boolean
  setShowDropdown: Dispatch<SetStateAction<boolean>>
}): JSX.Element => {
  const bem = useBemify('nav-icon')

  return (
    <button
      className={`${bem()} ${conditionalClasses([active, 'active'])}`}
      onClick={() => setShowDropdown(!active)}
    ></button>
  )
}
