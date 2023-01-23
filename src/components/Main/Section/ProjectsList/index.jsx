import Project from "./Project";
import ProjectListStyle from "./styles";

import hamburgueria from "../../../../assets/gifs/hamburgueria.gif";

const projects = [
  {
    name: "Burguer Kenzie",
    gif: hamburgueria,
    vercel: "https://react-entrega-s1-hamburgueria-da-kenzie-jeluskinha.vercel.app/",
    git:"https://github.com/Jeluskinha/react-entrega-s1-hamburgueria-da-kenzie-Jeluskinha"
  },
];

function ProjectList() {
  return (
    <ProjectListStyle>
      <ul>
        {projects.map((e) => (
          <Project name={e.name} gif={e.gif} vercel={e.vercel} git={e.git}/>
        ))}
      </ul>
    </ProjectListStyle>
  );
}

export default ProjectList;
