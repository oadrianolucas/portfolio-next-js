import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";
import { Curiosity } from "../components/Curiosity";
import { HeadTemplate } from "../components/HeadTemplate";

export default function Home() {
  return (
    <div>
      <HeadTemplate />
      <main className="relative min-h-screen md:flex text-gray-700 dark:text-gray-100 dark:bg-slate-900 ">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="container mx-auto px-8 pt-6 overflow-y-scroll scrollbar-hide h-screen md:mb-4">
            <Curiosity />
          </div>
        </div>
      </main>
    </div>
  );
}
