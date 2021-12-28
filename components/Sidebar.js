import {
  FaHome,
  FaMedium,
  FaBehanceSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
  FaPizzaSlice,
  FaPenFancy,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
function Sidebar() {
  return (
    <div
      className="sidebar w-64 border-r bg-white absolute inset-y-0 left-0 transform
    -translate-x-full md:relative md:-translate-x-0 duration-200 ease-in-out dark:border-gray-700 dark:bg-slate-900"
    >
      <div className="space-y-4">
        <button className="mobile-menu-button-close absolute top-0 right-0 p-2 text-4xl block md:hidden">
          <IoCloseSharp />
        </button>
        <div className="grid justify-items-center mt-4">
          <img
            className="rounded-full w-32"
            src="./img/perfil.jpg"
            alt="Me"
          ></img>
          <h2 className="font-bold text-xl pt-2">Adriano Lucas</h2>
          <p className="font-thin	text-lg">Full Stack Developer</p>
        </div>
        <hr className="border-t dark:border-gray-700" />
        <div className="pl-3 text-lg">
          <button className="flex items-center space-x-2 hover:text-gray-500">
            <FaHome />
            <a href="/">Home</a>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-500">
            <FaPenFancy />
            <a href="/skills">Habilidades </a>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-500">
            <FaMedium />
            <a href="/post">Artigos</a>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-500">
            <FaPizzaSlice />
            <a href="/curiosity">Curiosidades</a>
          </button>
        </div>
        <hr className="border-t dark:border-gray-700" />
        <div className="items-center space-x-1 text-4xl pl-3 pt-1">
          <button className="hover:text-gray-500">
            <a href="https://twitter.com/oadrianolucas" target="_blank">
              <FaTwitterSquare />
            </a>
          </button>
          <button className="hover:text-gray-500">
            <a href="https://instagram.com/oadrianolucas" target="_blank">
              <FaInstagramSquare />
            </a>
          </button>
          <button className="hover:text-gray-500">
            <a href="https://www.behance.net/oadrianolucas" target="_blank">
              <FaBehanceSquare />
            </a>
          </button>
          <button className="hover:text-gray-500">
            <a href="https://www.linkedin.com/in/adrianolucas/" target="_blank">
              <FaLinkedin />
            </a>
          </button>
          <button className="hover:text-gray-500">
            <a href="https://github.com/oadrianolucas" target="_blank">
              <FaGithubSquare />
            </a>
          </button>
        </div>
        <div className="flex items-center space-x-2 text-md pl-3">
          <SiMinutemailer />
          <p>contato@adrianolucas.com</p>
        </div>
        <hr className="border-t dark:border-gray-700" />
        <h4 className="text-sm pl-3">Feito com ❤️ por Adriano</h4>
      </div>
    </div>
  );
}

export default Sidebar;
