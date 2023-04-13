import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Skill/>
      <Projects/>
    </div>
  );
}
