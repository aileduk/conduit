import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className='mx-auto px-4 w-full max-w-screen-xl'>{children}</div>
}

export default Container
