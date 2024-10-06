import clsx from "clsx"
import { FC } from "react"
import { Link, useSearchParams } from "react-router-dom"

interface TagProps {
  tag: string
  isTagList?: boolean
}

const Tag: FC<TagProps> = ({ tag, isTagList }) => {
  const [searchParams] = useSearchParams()
  
  const isActiveTag = searchParams.get("tag") === tag

  const tagStyle = clsx("text-sm border border-gray-400 rounded-full text-center px-2 select-none", {
    "bg-gray-400 text-white cursor-pointer hover:bg-gray-500": isTagList,
    "cursor-default text-gray-400": !isTagList,
    "bg-gray-500 text-white": isActiveTag 
  })

  return (
    <li>
      <Link to={`/?tag=${tag}`} className={tagStyle}>
        {tag}
      </Link>
    </li>
  )
}

export default Tag
