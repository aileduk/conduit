import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  width?: string
}

const Container = ({ children, width = "max-w-screen-xl" }: ContainerProps) => {
  return <div className={`mx-auto px-4 w-full ${width}`}>{children}</div>
}

export default Container
