import { ListOfPosts } from './listOfPosts'
import PostStyles from './post.module.css'

export default async function PostPage () {
  return (
    <section className={PostStyles.sectionPost}>
      <h1 className={PostStyles.title}>LISTADO DE POST</h1>
      <section className={PostStyles.containerPost}>
        {/* @ts-expect-error Server Component */}
        <ListOfPosts />
      </section>
    </section>
  )
}
