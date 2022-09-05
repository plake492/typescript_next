import React, { Dispatch, SetStateAction, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { conditionalClasses } from '../utils/helpers'
import { useBemify } from '../hooks/useBemify'
import { Routes } from '../utils/types'

interface NavLinkProps {
  routes: Routes[]
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
  pathname: string
}

interface NavDropdownIconProps {
  active: boolean
  setShowDropdown: Dispatch<SetStateAction<boolean>>
}

export const Nav: React.FC = (): JSX.Element => {
  const routes: Routes[] = [
    { path: '/', title: 'Home' },
    { path: '/Typography', title: 'Typography' },
    { path: '/Flex', title: 'Flex' },
    { path: '/Cards', title: 'Cards' },
    { path: '/Colors', title: 'Colors' },
    { path: '/Images', title: 'Images' },
    { path: '/Inputs', title: 'Inputs' },
    { path: '/Calendar', title: 'Calendar' }
  ]

  const [showDropdwon, setShowDropdown] = useState(false)
  const bem = useBemify('nav')
  const { pathname } = useRouter()

  return (
    <nav className={bem()}>
      <div className="bg-midnight position-relative z-2 py-md px-md px-lg-xl d-flex justify-content-between align-items-center">
        <Link href="/">
          <a className="link nav-link link__no-underline">
            <h4>Patrick Lake</h4>
          </a>
        </Link>
        <div className="box-shadow d-none d-md-block">
          <NavLinks
            routes={routes}
            setShowDropdown={setShowDropdown}
            pathname={pathname}
          />
        </div>
        <div className="d-block d-md-none">
          <NavDropdownIcon
            active={showDropdwon}
            setShowDropdown={setShowDropdown}
          />
        </div>
      </div>

      <div
        className={`${bem('dropdown')} ${conditionalClasses([
          showDropdwon,
          'active'
        ])}`}
      >
        <div className="py-md px-xl bg-lake-80 border-bottom box-shadow">
          <NavLinks
            routes={routes}
            setShowDropdown={setShowDropdown}
            pathname={pathname}
          />
        </div>
      </div>
    </nav>
  )
}

export const NavDropdownIcon: React.FC<NavDropdownIconProps> = ({
  active,
  setShowDropdown
}: NavDropdownIconProps): JSX.Element => {
  const bem = useBemify('nav-icon')

  return (
    <button
      className={`${bem()} ${conditionalClasses([active, 'active'])}`}
      onClick={() => setShowDropdown(!active)}
      aria-label="Open Nav"
    ></button>
  )
}

export const NavLinks: React.FC<NavLinkProps> = ({
  routes,
  setShowDropdown,
  pathname
}: NavLinkProps): JSX.Element => (
  <ul className="d-flex gap-md justify-content-flex-end align-items-flex-end flex-col flex-md-row gap-none gap-md-md gap-lg-xl">
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
)
