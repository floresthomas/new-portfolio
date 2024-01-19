import shorturl from "../public/assets/imageshorturl.png";
import imagedys from "../public/assets/imagedys.png";
import kalu from "../public/assets/kalu.png";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="mt-5 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center">
        <div className="pb-8">
          <p className="text-3xl font-bold">Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <ProjectCard
            imageSrc={imagedys}
            description="Tienda online de ropa que ofrece una experiencia de compra intuitiva y atractiva. (En producción actualmente)"
            deployLink="https://pokemons-react-app.netlify.app"
          />
          <ProjectCard
            imageSrc={kalu}
            description="Explora la última moda en zapatillas con nuestra tienda online."
            deployLink="https://kalo-arg.vercel.app"
          />
          <ProjectCard
            imageSrc={shorturl}
            description="Cortador de URL para optimizar tus enlaces. Convierte largas direcciones en enlaces cortos y fáciles de compartir."
            deployLink="https://shorturl-frontend-lilac.vercel.app"
          />
        </div>
      </div>
    </div>
  );
}
