import { FC } from "react"

import { Author } from "../../types/types"
import PlusIcon from "../../ui/PlusIcon"

interface FollowProps {
  author: Author
}

const Follow: FC<FollowProps> = ({ author }) => {
  return (
    <button className='flex items-center gap-1 border border-gray-400 rounded py-0.5 px-2 text-gray-400 hover:bg-gray-400 hover:text-white'>
      <PlusIcon />
      <span className='text-sm'>Follow {author.username}</span>
    </button>
  )
}

export default Follow
