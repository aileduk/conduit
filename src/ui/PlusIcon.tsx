import { FC } from "react"

interface PlusIconProps {
  color?: string
}

const PlusIcon: FC<PlusIconProps> = ({ color }) => {
  return (
    <svg viewBox='0 0 24 24' className={`${color} w-4 h-4 aspect-square`} xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 12H20M12 4V20'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  )
}

export default PlusIcon
