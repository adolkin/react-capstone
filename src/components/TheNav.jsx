import '../styles/the-nav.css'
import { useLocation, Link } from 'react-router-dom';

const TheNav = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Menu',
      path: '/menu'
    },
    {
      name: 'Reservations',
      path: '/reservations'
    },
    {
      name: 'Order',
      path: '/order'
    },
    {
      name: 'Login',
      path: '/login'
    },
  ];

  const { pathname } = useLocation();

  console.log(pathname)

  return (
    <nav className="the-nav">
      <ul>
        {navLinks.map((navLink, index) => (
          <li key={index} className={pathname === navLink.path ? 'current-location' : ''}
          >
            <Link
              to={navLink.path}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TheNav;