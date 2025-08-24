import PostList from "@/pages/blogs/_components/PostList";
import { getPosts } from "@/services/postServices";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import React from "react";

const Category = async ({ params, searchParams }) => {
  const { categorySlug } = params;
  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug=${categorySlug}`;
  console.log(queries);
  const cookiesStore = await cookies();
  const options = await setCookieOnReq(cookiesStore);
  const {posts} = await getPosts(queries, options);
  const {search} = searchParams
  return (
    <div>
      {posts.length === 0 ? (
        <p>پستی در این دسته بندی پیدا نشد</p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default Category;
