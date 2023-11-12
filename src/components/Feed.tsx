'use client'

import React, { useState } from 'react'
import ArticlesList from './ArticlesList'
import PopularTags from './PopularTags'
import FeedControls from './FeedControls'
import ReactPaginate from 'react-paginate'
import { NUMBER_OF_ARTICLES_PER_PAGE } from '@/consts'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { switchingPages } from '@/redux/features/articlesSlice'

const Feed = () => {
  const { globalArticlesCount, page } = useAppSelector(state => state.articles)
  const dispatch = useAppDispatch()
console.log(globalArticlesCount);

  const handlerPage = ({ selected }: { selected: number }) => {
    dispatch(switchingPages(selected))
  }

  const numberOfPages = Math.ceil(globalArticlesCount / NUMBER_OF_ARTICLES_PER_PAGE)

  return (
    <div className='flex gap-5 py-5'>
      <div className='grow w-3/4'>
        <FeedControls />
        <ArticlesList page={page} />
        <nav className='my-10'>
          <ReactPaginate
            pageCount={numberOfPages}
            pageRangeDisplayed={numberOfPages}
            previousLabel={null}
            nextLabel={null}
            containerClassName='flex text-green-500 [&>*:nth-child(2)]:rounded-s [&>*:nth-last-child(2)]:rounded-e'
            pageClassName='border'
            pageLinkClassName='p-3 flex hover:bg-black/10 hover:underline'
            activeClassName='bg-green-500 text-white'
            onPageChange={handlerPage}
            forcePage={page}
          />
        </nav>
      </div>
      <PopularTags />
    </div>
  )
}

export default Feed
