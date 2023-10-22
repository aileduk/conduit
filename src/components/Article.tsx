'use client'
import { getGlobalArticles } from '@/redux/features/articlesSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'

const Article = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getGlobalArticles())
  }, [dispatch])

  const { globalArticles } = useAppSelector(state => state.articles)

  return <div>Article</div>
}

export default Article
