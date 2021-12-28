import { FiTwitter, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { BsBehance } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
export const About = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold pb-2">Sobre mim</h1>
        <p className="font-light text-2xl">
          Minha jornada na tecnologia iniciou-se aos 13 anos quando desenvolvi
          certo conhecimento em HTML e CSS. Aos 15 anos comecei um curso de
          desenvolvimento de jogos e aprimorei meus conhecimentos de programação
          com o passar dos anos adquiri conhecimentos em Photoshop, Illustrator
          e Figma focado em design e UI/UX. <br></br> <br></br>Paralelo aos
          estudos em programação, estudo sobre criptoativos e investimentos.
          Recentemente publiquei 2 e-books sobre o tema que podem ser
          encontrados no meu site.
        </p>
      </div>
      <div className="mt-3">
        <h3 className="text-3xl font-bold">Contato</h3>
        <p className="font-light text-2xl mt-2">
          Você pode entrar em contato comigo através de qualquer uma das minhas
          redes sociais.
        </p>
        <div className="items-center space-x-6 text-4xl mt-4">
          <button className="hover:text-gray-500">
            <a href="https://twitter.com/oadrianolucas" target="_blank">
              <FiTwitter />
            </a>
          </button>
          <button className="hover:text-gray-500">
            <a href="https://instagram.com/oadrianolucas" target="_blank">
              <FiInstagram />
            </a>
          </button>
          <button className="hover:text-gray-500">
            <a href="https://twitter.com/oadrianolucas" target="_blank">
              <BsBehance />
            </a>
          </button>
          <button className="hover:text-gray-500">
            <a href="https://twitter.com/oadrianolucas" target="_blank">
              <FiLinkedin />
            </a>
          </button>
          <button className="hover:text-gray-500">
            <a href="https://twitter.com/oadrianolucas" target="_blank">
              <FiGithub />
            </a>
          </button>
        </div>
        <div className="flex items-center font-medium space-x-2 text-xl mt-2">
          <SiMinutemailer />
          <p>contato@adrianolucas.com</p>
        </div>
      </div>
    </div>
  );
};
