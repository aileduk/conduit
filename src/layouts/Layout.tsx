import { Outlet } from "react-router-dom"

import Header from "../components/Header/Header"

const Layout = () => {
  return (
    <>
      <Header />
      <main className='font-titillium'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
