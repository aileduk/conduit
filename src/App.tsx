import { createBrowserRouter, RouterProvider } from "react-router-dom"

import ArticleDetails from "./components/ArticleDetails/ArticleDetails"
import { Endpoints, UrlEndpoints } from "./consts/endpoints"
import Layout from "./layouts/Layout"
import ErrorPage from "./pages/ErrorPage"
import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/MainPage"
import RegisterPage from "./pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: Endpoints.Root,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: Endpoints.Login,
        element: <LoginPage />
      },
      {
        path: Endpoints.Register,
        element: <RegisterPage />
      },
      {
        path: `${UrlEndpoints.artigles}/:slug`,
        element: <ArticleDetails />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
