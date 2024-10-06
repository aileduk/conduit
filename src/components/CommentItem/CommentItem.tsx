import { FC } from "react"

import { Link } from "react-router-dom"
import { UrlEndpoints } from "../../consts/endpoints"
import { formatDate } from "../../helpers/formatDate"
import { Comment } from "../../types/types"

interface CommentProps {
  comment: Comment
}

const CommentItem: FC<CommentProps> = ({ comment }) => {
  return (
    <li className='border border-gray-300'>
      <p className='p-5'>{comment.body}</p>
      <div className='p-5 flex gap-x-3 text-xs items-center bg-green-50 border-t border-gray-300'>
        <img src={comment.author.image} alt={comment.author.username} className='w-5 h-5 rounded-full' />
        <Link to={`${UrlEndpoints.Profiles}/${comment.author.username}`} className='text-green-600 hover:underline'>
          {comment.author.username}
        </Link>
        <p className='text-gray-400'>{formatDate(comment.updatedAt)}</p>
      </div>
    </li>
  )
}

export default CommentItem
