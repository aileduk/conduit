import { FC } from "react"
import { Link } from "react-router-dom"

import { UrlEndpoints } from "../../consts/endpoints"
import { Article as ArticleType } from "../../types/types"
import Like from "../Like/Like"
import Tag from "../Tag/Tag"
import UserInfo from "../UserInfo/UserInfo"

interface ArticleProps {
  article: ArticleType
}

const Article: FC<ArticleProps> = ({ article }) => {
  const { title, description, author, createdAt, favoritesCount, tagList, slug } = article

  return (
    <li className='pb-5 border-b border-gray-300 flex flex-col gap-y-2'>
      <div className='flex justify-between items-center'>
        <UserInfo author={author} date={createdAt} />
        <Like like={favoritesCount} />
      </div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-gray-400'>{description}</p>
      <div className='flex items-center justify-between gap-5'>
        <Link
          to={`${UrlEndpoints.artigles}/${slug}`}
          className='text-xs whitespace-nowrap text-gray-400 hover:text-gray-500'
        >
          Read more...
        </Link>
        <ul className='flex flex-wrap items-center justify-end gap-1'>
          {tagList.map(tag => (
            <Tag key={tag} tag={tag} />
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Article
