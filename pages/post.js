import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";
import Blog from "../components/Blog";
import { HeadTemplate } from "../components/HeadTemplate";

export default function Home() {
  return (
    <div className="">
      <HeadTemplate />
      <main className="flex min-h-screen text-gray-700 dark:text-gray-100  dark:bg-slate-900 ">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="container mx-auto px-8 pt-6 overflow-y-scroll scrollbar-hide h-screen md:mb-4">
            <Blog />
          </div>
        </div>
      </main>
    </div>
  );
}
