import Image from "next/image";
import avatar from "../public/assets/Avatar-Maker.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mx-auto max-w-screen-md">
      <h1 className="text-3xl font-extrabold text-center mb-4">
        ¡Soy Thomas! Desarrollador Backend
      </h1>
      <p className="text-lg font-bold text-center mb-4">
        Tengo 21 años y soy de Buenos Aires, Argentina. Terminé mis estudios
        como desarrollador web en 2021. Me encanta enfocarme en la parte de
        backend para ofrecer la mejor experiencia al usuario. Colaboré en el
        desarrollo de una tienda online actualmente en producción, optimizando
        el rendimiento del sistema con patrones de estructuración de datos.
      </p>
      <Image
        src={avatar}
        height={350}
        width={350}
        alt="avatar"
        className="mb-4"
      />
      <div className="flex justify-center items-center mt-4">
        <a
          href="https://www.linkedin.com/in/floresthomas/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin className="text-4xl sm:text-6xl mx-2 hover:text-blue-500 duration-300" />
        </a>
        <a
          href="https://github.com/floresthomas"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="text-4xl sm:text-6xl mx-2 hover:text-gray-700 duration-300" />
        </a>
        <a
          href="https://drive.google.com/file/d/1H-LZEC35HhrUKDAhZAhZmt0IipGqMm5Q/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsFillPersonLinesFill className="text-4xl mx-2 sm:text-6xl hover:text-yellow-300 duration-300" />
        </a>
      </div>
      <h1 className="mt-7 text-2xl text-center">Tecnologías que utilizo</h1>
    </div>
  );
}
