import Header from "./profile/_componnets/Header";
import SideBar from "./profile/_componnets/SideBar";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

export default function RootLayout({ children }) {
  return (
    <div className="bg-secondary-0">
      <div className="grid grid-cols-12  h-screen">
        <aside className="col-span-12 lg:col-span-3 hidden lg:block  xl:col-span-2">
          <SideBar />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          <Header />
        <main className="bg-secondary-100 p-4 md:p-6 lg:p-10 flex-1 ">
          <div className="xl:max-w-screen-xl ">{children}</div>
        </main>
        </div>
      </div>
    </div>
  );
}
