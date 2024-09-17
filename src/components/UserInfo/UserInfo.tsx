import { FC } from "react"
import { Link } from "react-router-dom"

import { formatDate } from "../../helpers/formatDate"
import { Author } from "../../types/types"

interface UserInfoProps {
  author: Author
  date: string
}

const UserInfo: FC<UserInfoProps> = ({ author, date }) => {
  const { image, username } = author

  return (
    <div className='flex items-center  gap-x-2'>
      <Link to='/'>
        <img src={image} alt='' className='w-8 aspect-square rounded-full' />
      </Link>
      <div>
        <Link to='/' className='text-green-600 hover:underline'>
          {username}
        </Link>
        <p className='text-xs text-gray-400'>{formatDate(date)}</p>
      </div>
    </div>
  )
}

export default UserInfo
