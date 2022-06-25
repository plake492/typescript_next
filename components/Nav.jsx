import { useRouter } from 'next/router'
import Link from 'next/link'

export const Nav = () => {
  const { pathname } = useRouter()

  const links = [
    { path: '/', title: 'Home' },
    { path: '/Images', title: 'Images' },
    { path: '/Typography', title: 'Typography' },
    { path: '/Colors', title: 'Colors' }
  ]

  return (
    <nav className="bg-midnight py-md d-flex justify-content-between align-items-center px-xl">
      <Link href="/">
        <a className="link nav-link link__no-underline">
          <h5>Nav</h5>
        </a>
      </Link>
      <ul className="d-flex flex-gap-md">
        {links.map(({ path, title }) => (
          <li key={path}>
            <Link href={path}>
              <a
                className={`link nav-link ${
                  pathname === path ? 'link__active' : ''
                }`}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
