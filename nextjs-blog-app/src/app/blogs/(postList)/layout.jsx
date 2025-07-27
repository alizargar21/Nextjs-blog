import React, { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import Spinner from "@/ui/Spinner";
import CategoryListSkeleton from "../_components/CategoryListSkeleton";
// import Search from "@/ui/Search";
export const metadata = {
  title: "بلاگ ها",
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};
const layout = ({ children }) => {
  return (
    <div className="">
      <div className="grid items-center grid-cols-1 gap-8  mb-12 lg:grid-cols-3 text-secondary-700">
        <h1 className="mb-12 text-lg font-bold">لیست بلاگ ها</h1>
        {/* <Search /> */}
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 space-y-4 lg:col-span-3  text-secondary-500 border border-secondary-400 p-4">
          <Suspense fallback={<CategoryListSkeleton />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-9  border border-secondary-400 p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
