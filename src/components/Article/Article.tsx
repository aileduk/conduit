import { FC } from "react"

import { Article as ArticleType } from "../../types/types"
import UserInfo from "../UserInfo/UserInfo"
import Like from "../Like/Like"

interface ArticleProps {
  article: ArticleType
}

const Article: FC<ArticleProps> = ({ article }) => {
  const { title, description, author, createdAt,favoritesCount } = article
  console.log(article)

  return (
    <li>
      <div className="flex justify-between items-center">
        <UserInfo author={author} date={createdAt} />
        <Like like={favoritesCount}/>
      </div>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p className='text-gray-400'>{description}</p>
    </li>
  )
}

export default Article
