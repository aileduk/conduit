import React from 'react'
import Article from './Article'

const ArticleList = () => {
  const arr = Array(5)
  console.log(arr)

  return (
    <div>
      {Array(5).fill('0').map(item => (
        <Article key={item} />
      ))}
    </div>
  )
}

export default ArticleList
