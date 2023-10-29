'use client'
import React, { useEffect } from 'react'
import { getGlobalArticles } from '@/redux/features/articlesSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import Article from './Article'

const ArticleList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getGlobalArticles())
  }, [dispatch])

  const { globalArticles } = useAppSelector(state => state.articles)

  return (
    <ul className='flex flex-col gap-y-5'>
      {globalArticles.map(article => (
        <Article key={article.slug} {...article} />
      ))}
    </ul>
  )
}

export default ArticleList
