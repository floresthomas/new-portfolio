import Image from "next/image";
import avatar from "../public/assets/Avatar-Maker.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center ml-3">
      <h1 className="mt-10 text-4xl font-extrabold sm:max-w-[70%]">
        Thomas Ezequiel Flores
      </h1>
      <p className="mt-4 font-bold m-auto">
        {" "}
        Me gustaría ayudarte en cualquier proyecto que necesites, sería un
        placer para mí <br />
        ofrecerte mis conocimientos para construir tu idea a través de la
        programación{" "}
      </p>
      <Image src={avatar} height={350} width={350} alt="avatar" />
      <div className="flex flex-row justify-center items-center mt-4">
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
      <h1 className="mt-7 text-2xl">Tecnologias que utilizo</h1>
    </div>
  );
}
