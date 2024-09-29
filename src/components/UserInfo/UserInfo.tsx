import { FC } from "react"
import { Link, useParams } from "react-router-dom"

import { UrlEndpoints } from "../../consts/endpoints"
import { formatDate } from "../../helpers/formatDate"
import { Author } from "../../types/types"

interface UserInfoProps {
  author: Author
  date: string
  usernameColor?: string
}

const UserInfo: FC<UserInfoProps> = ({ author, date, usernameColor }) => {
  const { image, username } = author

  const { username: name } = useParams<string>()

  return (
    <div className='flex items-center gap-x-2'>
      <Link
        to={`${UrlEndpoints.Profiles}/${author.username}`}
        className={`${name === username ? "pointer-events-none" : ""}`}
      >
        <img src={image} alt='' className='w-8 aspect-square rounded-full' />
      </Link>
      <div>
        <Link
          to={`${UrlEndpoints.Profiles}/${author.username}`}
          className={`${usernameColor || "text-green-600"}  ${
            name === username ? "pointer-events-none" : ""
          } hover:underline`}
        >
          {username}
        </Link>
        <p className='text-xs  text-gray-400'>{formatDate(date)}</p>
      </div>
    </div>
  )
}

export default UserInfo
