import { getGlobalArticles } from '@/redux/features/articlesSlice'
import { useAppDispatch } from '@/redux/hooks'
import React from 'react'

const FeedControls = () => {
  const dispatch = useAppDispatch()

  const globalArticles = () => {
    dispatch(getGlobalArticles({ page: 0 }))
  }

  return (
    <div className='flex'>
      <button onClick={globalArticles} className='p-2 border-green-500 border-b-2 text-green-500 text-sm'>
        Global Feed
      </button>
    </div>
  )
}

export default FeedControls
