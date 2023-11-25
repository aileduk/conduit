import { getGlobalArticles, switchingPages, tagSelection } from '@/redux/features/articlesSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import clsx from 'clsx'
import React from 'react'

interface TagProps {
  tag: string
  articleTags?: boolean
  allTags?: boolean
}

const Tag = ({ tag, articleTags, allTags }: TagProps) => {
  const { selectedTag } = useAppSelector(state => state.articles)
  const dispatch = useAppDispatch()

  const tagClass = clsx('border px-2 py-0.5 text-xs rounded-2xl', {
    'text-black/40 bg-transparent': articleTags,
    'text-white bg-gray-400 hover:bg-gray-500': allTags,
    'bg-gray-500 underline': selectedTag === tag
  })

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
