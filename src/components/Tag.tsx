import { getGlobalArticles, switchingPages, tagSelection } from '@/redux/features/articlesSlice'
import { useAppDispatch } from '@/redux/hooks'
import clsx from 'clsx'
import React from 'react'

interface TagProps {
  tag: string
  articleTags?: boolean
  allTags?: boolean
}

const Tag = ({ tag, articleTags, allTags }: TagProps) => {
  const tagClass = clsx('border px-1 py-0.5 text-xs rounded-2xl', {
    'text-black/40 bg-transparent': articleTags,
    'text-white bg-gray-400 hover:bg-gray-500': allTags
  })

  const dispatch = useAppDispatch()

  const getArticlesByTag = (tag: string) => {
    dispatch(getGlobalArticles({ tag, page: 0 }))
    dispatch(tagSelection(tag))
    dispatch(switchingPages(0))
  }

  return (
    <button onClick={() => getArticlesByTag(tag)} className={tagClass}>
      {tag}
    </button>
  )
}

export default Tag
