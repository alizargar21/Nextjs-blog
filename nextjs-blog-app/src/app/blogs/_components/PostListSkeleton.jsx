// components/PostListSkeleton.tsx
import PostCardSkeleton from "./PostCardSkeleton";

export default function PostListSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="col-span-12 sm:col-span-6 lg:col-span-4"
        >
          <PostCardSkeleton />
        </div>
      ))}
    </div>
  );
}
