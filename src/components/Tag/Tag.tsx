import clsx from "clsx"
import { FC } from "react"
import { Link } from "react-router-dom"

interface TagProps {
  tag: string
  isTagList?: boolean
}

const Tag: FC<TagProps> = ({ tag, isTagList }) => {
  const tagStyle = clsx("text-sm cursor-auto text-gray-400 border border-gray-400 rounded-full text-center px-2", {
    "bg-gray-400 text-white cursor-pointer hover:bg-gray-500": isTagList
  })

  return (
    <li>
      <Link to='/' className={tagStyle}>
        {tag}
      </Link>
    </li>
  )
}

export default Tag
