'use client'
import { useState } from 'react'
import PostStyles from './post.module.css'

export function LikeButton () {
  const [liked, setLiked] = useState(false)
  return (
    <button className={PostStyles.likeButton} onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🖤'}
    </button>
  )
}
