import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import AuthProvider from "context/authContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "بلاگ ها",
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazirFont.variable} font-sans  antialiased`}>
        <AuthProvider>
          <Toaster />
          <Header />
          <div className="container">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
