import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";
import { Skills } from "../components/Skills";
import { HeadTemplate } from "../components/HeadTemplate";

export default function Home() {
  return (
    <div>
      <HeadTemplate />
      <main className="relative min-h-screen md:flex text-gray-700 dark:text-gray-100 dark:bg-slate-900 ">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="container mx-auto px-8 pt-6 pb-16 overflow-y-scroll scrollbar-hide h-screen">
            <Skills />
          </div>
        </div>
      </main>
    </div>
  );
}
