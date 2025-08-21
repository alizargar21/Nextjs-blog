import http from "./httpServices";

export async function getPostBySlug(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await res.json();
  const { post } = data || {};
  return post;
}
export async function getPosts(option) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list`,
    option
  );
  const { data } = await res.json();
  const { posts } = data || {};

  return posts;
}
export async function likePostApi(postId) {
  return  http.post(`/post/like/${postId}`).then(({ data }) => data.data);
}
export async function bookMarkPostApi(postId) {
  return http
  .post(`/post/bookmark/${postId}`)
  .then(({ data }) => data.data);
}
