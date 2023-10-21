import { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => {
  return <div className='max-w-screen-xl w-full mx-auto px-20'>{children}</div>
}

export default Container
