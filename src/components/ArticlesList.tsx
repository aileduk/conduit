'use client'
import React, { useEffect } from 'react'
import { getGlobalArticles } from '@/redux/features/articlesSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import Article from './Article'
import { DownloadStatus } from '@/types/articles'
import Loading from './Loading'

interface ArticlesListProps {
  page: number
}

const ArticlesList = ({ page }: ArticlesListProps) => {
  const dispatch = useAppDispatch()

  const { selectedTag } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(getGlobalArticles({ page, tag: selectedTag }))
  }, [dispatch, page, selectedTag])

  const { globalArticles, globalArticlesDownloadStatus } = useAppSelector(state => state.articles)

  if (globalArticlesDownloadStatus === DownloadStatus.Loading) return <Loading />

  return (
    <>
      <ul className='flex flex-col gap-y-5'>
        {globalArticles.map(article => (
          <Article key={article.slug} {...article} />
        ))}
      </ul>
    </>
  )
}

export default ArticlesList
