import { FC } from "react"

interface InputProps {
  type: string
  placeholder: string
}

const Input: FC<InputProps> = ({ type, placeholder }) => {
  return <input type={type} placeholder={placeholder} className='border border-gray-300 py-3 px-4 rounded placeholder:text-xl focus-within:outline-green-600 select-none' />
}

export default Input
