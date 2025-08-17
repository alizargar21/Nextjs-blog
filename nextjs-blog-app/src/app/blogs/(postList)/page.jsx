import React from 'react'
import PostList from '../_components/PostList'
import { getPosts } from '@/services/postServices'

const BlogPage = async () => {
 const posts =  await getPosts()
 console.log(posts)
  return (
    <div>
       {/* {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${posts.length} نتیجه برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null} */}
         { posts.length === 0 ? null :  <PostList posts={posts} />}
    </div>
  )
}

export default BlogPage
