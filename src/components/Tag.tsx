import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

interface TagProps {
  tag: string
  articleTags?: boolean
  allTags?: boolean
}

const Tag = ({ tag, articleTags, allTags }: TagProps) => {
  const tagClass = clsx('border px-1 py-0.5 text-xs rounded-2xl', {
    'text-black/40 bg-transparent': articleTags,
    'text-white bg-gray-400 hover:bg-gray-500': allTags
  })

  return (
    <Link href={''} className={tagClass}>
      {tag}
    </Link>
  )
}

export default Tag
