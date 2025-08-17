// components/PostCardSkeleton.tsx
"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import { ClockIcon } from "lucide-react";

export default function PostCardSkeleton() {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg">
      {/* تصویر پست */}
      <Skeleton height={180} className="rounded-md mb-3" />

      {/* عنوان */}
      <Skeleton height={20} width={`80%`} className="mb-4" />

      {/* نویسنده و زمان مطالعه */}
      <div className="flex items-center justify-between mb-4">
        {/* نویسنده */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Skeleton circle width={32} height={32} />
          <Skeleton width={80} height={12} />
        </div>

        {/* زمان مطالعه */}
        <div className="flex items-center text-[10px] text-secondary-500">
          {/* <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" /> */}
          <Skeleton width={30} height={10} />
        </div>
      </div>
    </div>
  );
}
