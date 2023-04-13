import Image from "next/image";
import javascript from "../public/assets/icon-javascript.png";
import react from "../public/assets/react-icon.png";
import mongodb from "../public/assets/mongo.png";
import node from "../public/assets/node.png";
import postgres from "../public/assets/postgresql-logo.jpg";
import git from "../public/assets/git.png";
import redux from "../public/assets/redux.png";
import html from "../public/assets/html.png";
import css from "../public/assets/css.png";

export default function Skill() {
  const techs = [
    {
      id: 1,
      src: javascript,
    },
    {
      id: 2,
      src: react,
    },
    {
      id: 3,
      src: mongodb,
    },
    {
      id: 4,
      src: node,
    },
    {
      id: 5,
      src: postgres,
    },
    {
      id: 6,
      src: git,
    },
    {
      id: 7,
      src: redux,
    },
    {
      id: 8,
      src: html,
    },
    {
      id: 9,
      src: css,
    },
  ];
  return (
    <div className="mt-5 flex justify-center items-center gap-4">
      {techs.map(({ id, src }) => (
        <div key={id}>
          <Image src={src} width={80} height={80} />
        </div>
      ))}
    </div>
  );
}
