import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";
import Blog from "../components/Blog";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Adriano Lucas</title>
      </Head>
      <main className="flex min-h-screen text-gray-700 dark:text-gray-100  dark:bg-slate-900 ">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="container mx-auto px-8 pt-6 overflow-y-scroll scrollbar-hide h-screen">
            <Blog />
          </div>
        </div>
      </main>
    </div>
  );
}
