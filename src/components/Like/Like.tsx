import { FC } from "react"

import HeartIcon from "../../ui/HeartIcon"

interface LikeProps {
  like: number
}
const Like: FC<LikeProps> = ({ like }) => {
  return (
    <button className='flex items-center gap-x-1 py-0.5 px-2 border border-green-600 rounded text-green-600 hover:text-white hover:bg-green-600'>
      <HeartIcon color={"text-inherit"} />
      <span className='text-green-600 text-sm text-inherit'>{like}</span>
    </button>
  )
}

export default Like
