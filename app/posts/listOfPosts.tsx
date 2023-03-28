import Link from 'next/link'
import { LikeButton } from './likeButton'
import PostStyles from './post.module.css'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post =>
    <article key={post.id} className={PostStyles.post}>
      <Link href={`/posts/${post.id}`}>
        <h2 className={PostStyles.postTitle}>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton />
    </article>
  )
}
