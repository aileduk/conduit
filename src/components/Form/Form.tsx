import { FC } from "react"
import { Link } from "react-router-dom"

import Input from "../../ui/Input"

interface FormProps {
  actionText: string
  accoutText: string
  isRegister?: boolean
}

const Form: FC<FormProps> = ({ actionText, accoutText, isRegister }) => {
  return (
    <form className='flex flex-col max-w-xl mx-auto gap-y-3 mt-5'>
      <h1 className='text-4xl text-center'>{actionText}</h1>
      <Link to='/' className='text-green-600 text-center hover:underline hover:text-green-700 self-center'>
        {accoutText}
      </Link>
      {isRegister && <Input type='text' placeholder='Username' />}
      <Input type='email' placeholder='Email' />
      <Input type='password' placeholder='Password' />
      <button
        type='submit'
        className='text-xl text-white bg-green-600 rounded py-3 px-6 self-end hover:bg-green-700 select-none'
      >
        {actionText}
      </button>
    </form>
  )
}

export default Form
