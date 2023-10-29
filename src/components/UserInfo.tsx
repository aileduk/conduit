import React from 'react'
import { format, parseISO } from 'date-fns'

import Image from 'next/image'
import Link from 'next/link'

import { IAuthor } from '@/types/articles'

interface UserInfoProps {
  author: IAuthor
  createdAt: string
}

const UserInfo = ({ author, createdAt }: UserInfoProps) => {
  const dateObj = parseISO(createdAt)
  const formattedDate = format(dateObj, 'MMMM d, yyyy')

  return (
    <div className='flex items-center gap-x-2'>
      <Link href={''}>
        <Image className='rounded-full' src={author.image} alt='Author avatar' width={30} height={30} />
      </Link>
      <div>
        <Link href={''}>
          <h6 className='text-sm text-green-500 hover:text-green-600 hover:underline'>{author.username}</h6>
        </Link>
        <p className='text-xs text-black/40 font-light'>{formattedDate}</p>
      </div>
    </div>
  )
}

export default UserInfo
