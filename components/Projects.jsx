import ecommerce from "../public/assets/ecommerce.png";
import videogames from "../public/assets/videogames.png";
import kalu from "../public/assets/kalu.png";
import pokemon from "../public/assets/pokemon.png";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="mt-5 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center">
        <div className="pb-8">
          <p className="text-3xl font-bold">Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="bg-gray-600 shadow-md shadow-gray-600 rounded-lg  ">
            <Image
              className="duration-200 hover:scale-105"
              src={pokemon}
              alt="/"
              width={500}
              height={100}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105 ">
                <a
                  href="https://pokemons-react-app.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105">
                <a
                  href="https://github.com/floresthomas/PI-Pokemon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </button>
            </div>
          </div>
          <div className="bg-gray-600 shadow-md shadow-gray-600 rounded-lg">
            <Image
              className="duration-200 hover:scale-105"
              src={kalu}
              alt="/"
              width={500}
              height={100}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105">
                <a
                  href="https://kalo-arg.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </button>
            </div>
          </div>
          <div className="bg-gray-600 shadow-md shadow-gray-600 rounded-lg">
            <Image
              className="duration-200 hover:scale-105"
              src={videogames}
              alt="/"
              width={500}
              height={100}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105">
                <a
                  href="https://react-videogames-app.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deploy
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="https://github.com/floresthomas/PI-Videogames"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </button>
            </div>
          </div>
          <div className="bg-gray-600 shadow-md shadow-gray-600 rounded-lg">
            <Image
              className="duration-200 hover:scale-105"
              src={ecommerce}
              alt="/"
              width={500}
              height={100}
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4  duration-200 hover:scale-105">
                <a href="#" target="_blank" rel="noreferrer">
                  Deploy
                </a>
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a
                  href="https://github.com/floresthomas/ecommerce-client"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
