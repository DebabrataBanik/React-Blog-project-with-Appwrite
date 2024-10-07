import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Container, Logo, LogoutBtn } from '../index.js'

function Header() {

  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/posts',
      active: authStatus
    },
    {
      name: 'Create Post',
      slug: '/create',
      active: authStatus
    }
  ]

  return (
    <header>
      <Container>
        <nav>
          <div>
            <Link>
              <Logo width='70px' />
            </Link>
            <ul>
              {navItems.map(item =>
                item.active ? (
                  <li
                    onClick={() => navigate(item.slug)}
                    key={item.name}>
                    {item.name}
                  </li>
                ) : null)}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header