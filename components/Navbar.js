import Link from 'next/link'
import { useRouter } from 'next/router'
import style from '../styles/Navbar.module.scss'

const Navbar = () => {
  const { pathname } = useRouter()

  const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Posts', path: '/posts' },
    { id: 3, title: 'Contacts', path: '/contacts' },
  ]

  return (
    <nav className={style.nav}>
      <div className={style.logo}>webdev</div>
      <div className={style.links}>
        {navigation.map(({ id, title, path }) => (
          <Link href={path} key={id}>
            <a className={pathname === path ? style.active : null} >{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
