import { FC } from "react"
import { Comment } from "../../types/types"
import CommentItem from "../CommentItem/CommentItem"

interface CommentsListProps {
  comments: Comment[]
}

const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  return (
    <>
      <ul className="flex flex-col gap-y-5">
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </ul>
    </>
  )
}

export default CommentsList
