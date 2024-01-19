import Image from "next/image";

export default function ProjectCard({ imageSrc, description, deployLink }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg overflow-hidden shadow-md hover:shadow-lg text-center">
      <div className="relative mb-6 h-100">
        <Image
          src={imageSrc}
          alt="Project Image"
          className="rounded-md hover:scale-105 transition-transform"
        />
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex justify-center">
        <a
          href={deployLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Deploy
        </a>
      </div>
    </div>
  );
}
