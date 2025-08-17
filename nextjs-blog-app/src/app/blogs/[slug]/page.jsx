// import PostComment from "@/pages/_components/comments/postComment";
// import RelatedPost from "@/pages/_components/RealatedPost";
import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = await getPosts();
  const slug = posts.map((post) => ({ slug: post.slug }));
  return slug;
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `پست ${post.title}`,
  };
}
async function BlogDetail({ params }) {
  const post = await getPostBySlug(params.slug);
  console.log(post)
  if (!post) notFound();
  return (
    <div className="max-w-screen-md mx-auto text-secondary-600">
      <h1>{post.title}</h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative mb-10 overflow-hidden rounded-lg aspect-w-16 aspect-h-9">
        <Image
          className="object-cover object-center transition-all duration-300 ease-out hover:scale-110"
          src={post.coverImageUrl}
          alt=""
          fill
        />
      </div>
      {/* {post.related.length > 0 && <RelatedPost posts={post.related} />} */}
      {/* <PostComment post={post} /> */}
    </div>
  );
}

export default BlogDetail;
