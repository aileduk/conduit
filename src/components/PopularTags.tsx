'use client'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getAllTags } from '@/redux/features/articlesSlice'
import Tag from './Tag'

const PopularTags = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllTags())
  }, [dispatch])

  const { allTags } = useAppSelector(state => state.articles)

  return (
    <aside className='w-1/4 flex flex-col gap-y-2 bg-gray-100 p-2 h-fit'>
      <h2 className=''>Popular Tags</h2>
      <div className='flex flex-wrap gap-1'>
        {allTags.map(tag => (
          <Tag key={tag} tag={tag} allTags />
        ))}
      </div>
    </aside>
  )
}

export default PopularTags
