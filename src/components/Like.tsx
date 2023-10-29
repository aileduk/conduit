import React from 'react'
import { AiFillHeart as Heart } from 'react-icons/ai'

interface LikeProps {
  favoritesCount: number
}

const Like = ({ favoritesCount }: LikeProps) => {
  return (
    <button className='flex items-center justify-between gap-x-1 text-green-500 text-sm px-1 py-0.5 border rounded border-green-500 hover:text-white hover:bg-green-500'>
      <Heart />
      <span>{favoritesCount}</span>
    </button>
  )
}

export default Like
