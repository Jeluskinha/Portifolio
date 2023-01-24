import Project from "./Project";
import ProjectListStyle from "./styles";
import { useEffect, useState } from "react";

import hamburgueria from "../../../../assets/gifs/hamburgueria.gif";
import DuoGaming from "../../../../assets/gifs/DuoGaming.gif";
import Nukenzie from "../../../../assets/gifs/NuKenzie.gif";
import Kenziehub from "../../../../assets/gifs/KenzieHub.gif";
import RickAndMorty from "../../../../assets/gifs/RickAndMorty.gif";

const projects = [
  {
    name: "Burguer Kenzie",
    gif: hamburgueria,
    vercel: "https://react-entrega-s1-hamburgueria-da-kenzie-jeluskinha.vercel.app",
    git:"https://github.com/Jeluskinha/react-entrega-s1-hamburgueria-da-kenzie-Jeluskinha"
  },
  {
    name: "Duo Gaming",
    gif: DuoGaming,
    vercel: "https://duogaming-front-end.vercel.app/",
    git:"https://github.com/Jeluskinha/duogaming_frontend"
  },
  {
    name: "NuKenzie",
    gif: Nukenzie,
    vercel: "https://react-entrega-s1-nu-kenzie-jeluskinha.vercel.app",
    git:"https://github.com/Jeluskinha/react-entrega-s1-nu-kenzie-Jeluskinha"
  },
  {
    name: "Kenzie Hub",
    gif: Kenziehub,
    vercel: "https://projeto-kenziehub.vercel.app/login",
    git:"https://github.com/Jeluskinha/projetoKenziehub"
  },
  {
    name: "Rick AndMorty",
    gif: RickAndMorty,
    vercel: "https://react-s2-rick-and-morty.vercel.app",
    git:"https://github.com/Jeluskinha/react-atividade-s1-buscando-mais-personagens-Jeluskinha"
  },
];


function ProjectList() {

  const [numProcjects, setNumProjects] = useState(0)

  useEffect(() => {
    setNumProjects(projects.length)
  },[]);

  return (
    <ProjectListStyle projects={numProcjects}>
      <ul>
        {projects.map((e) => (
          <Project name={e.name} gif={e.gif} vercel={e.vercel} git={e.git}/>
        ))}
      </ul>
    </ProjectListStyle>
  );
}

export default ProjectList;
