import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./layouts/Layout"
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"
import RegisterPage from "./pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <MainPage />
      </Layout>
    )
  },
  {
    path: "login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    )
  },
  {
    path: "register",
    element: (
      <Layout>
        <RegisterPage />
      </Layout>
    )
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
