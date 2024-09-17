import { Link, NavLink } from "react-router-dom"

import clsx from "clsx"
import { Endpoints } from "../../consts/endpoints"
import Container from "../../layouts/Container"

const Header = () => {
  const styleLink = ({ isActive }: { isActive: boolean }) =>
    clsx("hover:text-black", {
      "text-black": isActive,
      "text-black/40": !isActive
    })

  return (
    <header className='min-h-14 flex items-center font-titillium'>
      <Container>
        <nav className='flex justify-between items-center gap-5'>
          <Link to={Endpoints.Root} className='text-2xl font-bold  text-green-600'>
            conduit
          </Link>
          <ul className='flex justify-between items-center gap-5'>
            <li>
              <NavLink to={Endpoints.Root} className={styleLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={Endpoints.Login} className={styleLink}>
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink to={Endpoints.Register} className={styleLink}>
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
