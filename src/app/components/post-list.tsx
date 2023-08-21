import PostCard from './post-card'
import { type Post } from '@/types/posts'

export async function PostList ({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {
        posts?.map(post => {
          const { id, users, content } = post
          const { user_name: userName, name: userFullName, avatar_url: avatarUrl } = users
          return (
            <PostCard
              avatarUrl={avatarUrl}
              key={id}
              userName={userName}
              userFullName={userFullName}
              content={content} />
          )
        })
      }
    </>
  )
}
