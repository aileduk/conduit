'use client'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllTags } from '@/redux/features/articlesSlice'
import Tag from './Tag'
import { DownloadStatus } from '@/types/articles'
import Loading from './Loading'

const PopularTags = () => {
  const dispatch = useAppDispatch()
  const { allTags, tagsDownloadStatus } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(getAllTags())
  }, [dispatch])

 

  return (
    <aside className='w-1/4 flex flex-col gap-y-2 bg-gray-100 p-2 h-fit'>
      <h2>Popular Tags</h2>
      {tagsDownloadStatus === DownloadStatus.Loading ? (
        <Loading />
      ) : (
        <div className='flex flex-wrap gap-1'>
          {allTags.map(tag => (
            <Tag key={tag} tag={tag} allTags />
          ))}
        </div>
      )}
    </aside>
  )
}

export default PopularTags
