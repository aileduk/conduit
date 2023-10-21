'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className='flex items-center justify-between gap-x-10 py-3'>
      <Link href='/' className='text-3xl font-titillium font-bold text-green-500'>
        conduit
      </Link>
      <ul className='flex items-center gap-x-5'>
        <li>
          <Link href='/' className={`${pathname === '/' ? 'text-black' : 'text-black/40'} hover:text-black`}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/login' className={`${pathname === '/login' ? 'text-black' : 'text-black/40'} hover:text-black`}>
            Sign in
          </Link>
        </li>
        <li>
          <Link
            href='/register'
            className={`${pathname === '/register' ? 'text-black' : 'text-black/40'} hover:text-black`}
          >
            Sign up
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
