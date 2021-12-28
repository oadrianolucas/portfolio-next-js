export const Curiosity = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-3">Curiosidades</h1>
      <ul className="font-thin text-xl space-y-4">
        <li>Moro em Diadema - SP</li>
        <li>
          Tenho um Podcast sobre educação financeira o Futuro Investidor da um
          conferida{" "}
          <a
            className="text-blue-500"
            href="https://anchor.fm/futuroinvestidor"
            target="_blank"
          >
            Clicando Aqui
          </a>
        </li>
        <li>Minha comida preferida é nhoque ou o que tiver na mesa.</li>
        <li>
          Meu maior hobbie é correr, mas atualmente o aprendizado no violão está
          evoluindo, toco alguns instrumentos de percussão e quando tem aquele
          futebol pego no gol.
        </li>
        <li className="font-medium">
          Escuto qualquer tipo de musíca, mas minha playlist diária são essas
          criadas por mim:
          <ul className="pl-4 font-thin mt-3">
            <li>
              <a
                className="text-blue-500"
                href="https://deezer.page.link/ou5deRSHYvwWBdDN9"
                target="_blank"
              >
                100% ANIMADO
              </a>
            </li>
            <li>
              <a
                className="text-blue-500"
                href="https://deezer.page.link/yCjVA4unJGuVggwX8"
                target="_blank"
              >
                SÓ TRACK BOA 2022
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
