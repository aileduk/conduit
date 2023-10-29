import React from 'react'
import ArticleList from './ArticleList'
import PopularTags from './PopularTags'
import FeedControls from './FeedControls'

const Feed = () => {
  return (
    <div className='flex gap-5 py-5'>
      <div className='grow w-3/4'>
        <FeedControls />
        <ArticleList />
      </div>
      <PopularTags />
    </div>
  )
}

export default Feed
