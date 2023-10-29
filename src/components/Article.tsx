import { IArticle } from '@/types/articles'

import UserInfo from './UserInfo'
import Like from './Like'
import Link from 'next/link'
import Tag from './Tag'

const Article = (props: IArticle) => {
  const { author, createdAt, favoritesCount, title, description, tagList } = props

  return (
    <li className='pt-5 border-t'>
      <article className='flex flex-col gap-y-2'>
        <div className='flex items-center justify-between'>
          <UserInfo author={author} createdAt={createdAt} />
          <Like favoritesCount={favoritesCount} />
        </div>
        <Link href={''} className='flex flex-col gap-y-1'>
          <h2 className='text-xl font-semibold'>{title}</h2>
          <div className='text-sm text-black/40'>
            <p>{description}</p>
          </div>
        </Link>
        <div className='flex justify-between items-center'>
          <Link href={''} className='text-xs text-black/40'>
            Read more...
          </Link>
          <div className='flex gap-x-1 items-center'>
            {tagList.map(tag => (
              <Tag key={tag} tag={tag} articleTags />
            ))}
          </div>
        </div>
      </article>
    </li>
  )
}

export default Article
