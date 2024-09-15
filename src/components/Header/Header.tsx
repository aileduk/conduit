import { Link, NavLink } from "react-router-dom"

import { Endpoints } from "../../consts/endpoints"
import Container from "../../layouts/Container"

const Header = () => {
  const isActiveLink = ({ isActive }: { isActive: boolean }) => (isActive ? "text-black" : "text-black/40")

  return (
    <header className='min-h-14 flex items-center font-titillium'>
      <Container>
        <nav className='flex justify-between items-center gap-5'>
          <Link to={Endpoints.Root} className='text-2xl font-bold  text-green-600'>
            conduit
          </Link>
          <ul className='flex justify-between items-center gap-5'>
            <li>
              <NavLink to={Endpoints.Root} className={isActiveLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={Endpoints.Login} className={isActiveLink}>
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink to={Endpoints.Register} className={isActiveLink}>
                Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
