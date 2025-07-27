"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-32">
          <div>
            <h1 className="mb-16 text-xl font-bold text-secondary-700">
              هیچ پستی با این مشخصات یافت نشد
            </h1>
            <div className="flex w-full justify-center items-center">
              <button
                onClick={moveBack}
                className="flex items-center justify-center   gap-x-2 text-secondary-500"
              >
                <span> رفتن به صفحه بلاگ ها</span>
                <ArrowRightIcon className="w-6 h-6 text-primary-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
