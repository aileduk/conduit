import { getGlobalArticles, switchingPages, tagSelection } from '@/redux/features/articlesSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import clsx from 'clsx'
import React from 'react'

const FeedControls = () => {
  const { selectedTag } = useAppSelector(state => state.articles)
  const dispatch = useAppDispatch()

  const controlsClass = clsx('p-2 text-sm', {
    'text-black/40': selectedTag,
    'border-green-500 border-b-2 text-green-500': !selectedTag
  })

  const globalArticles = () => {
    dispatch(getGlobalArticles({ page: 0 }))
    dispatch(tagSelection(null))
    dispatch(switchingPages(0))
  }

  return (
    <div className='flex items-center'>
      <button onClick={globalArticles} className={controlsClass}>
        Global Feed
      </button>
      {selectedTag && <div className='p-2 text-sm border-green-500 border-b-2 text-green-500'># {selectedTag}</div>}
    </div>
  )
}

export default FeedControls
