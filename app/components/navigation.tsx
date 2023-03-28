import Styles from './Navigation.module.css'

import Link from 'next/link'

export default function Navigation () {
  const links = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Posts', route: '/posts' }
  ]
  return (
    <header className={Styles.header}>
      <nav>
        <ul className={Styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          )
          )}
        </ul>
      </nav>
    </header>
  )
}
