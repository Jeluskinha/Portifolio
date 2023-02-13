import Project from "./Project";
import ProjectListStyle from "./styles";
import { useEffect, useState } from "react";

import hamburgueria from "../../../../assets/projects/hamburgueria.gif";
import DuoGaming from "../../../../assets/projects/DuoGaming.gif";
import Nukenzie from "../../../../assets/projects/NuKenzie.gif";
import Kenziehub from "../../../../assets/projects/KenzieHub.gif";
import RickAndMorty from "../../../../assets/projects/RickAndMorty.gif";
import mksChallenge from "../../../../assets/projects/mksChallenge.gif";

// ***COMO EDITAR***
// na chave deploy => inserir o link da sua aplicação ex: => "https://react-s2-rick-and-morty.vercel.app"
// na chave git => inserir o link do repositório da aplicação **PUBLICO** ex: => https://github.com/Jeluskinha/react-atividade-s1-buscando-mais-personagens-Jeluskinha
// se não houver um deploy vercionado ou repositório publico, bastar inserir o valor null na chave

const projects = [
  {
    name: "Burguer Kenzie",
    gif: hamburgueria,
    deploy: "https://react-entrega-s1-hamburgueria-da-kenzie-jeluskinha.vercel.app",
    git:"https://github.com/Jeluskinha/react-entrega-s1-hamburgueria-da-kenzie-Jeluskinha"
  },
  {
    name: "Duo Gaming",
    gif: DuoGaming,
    deploy: "https://duogaming-front-end.vercel.app/",
    git:"https://github.com/Jeluskinha/duogaming_frontend"
  },
  {
    name: "NuKenzie",
    gif: Nukenzie,
    deploy: "https://react-entrega-s1-nu-kenzie-jeluskinha.vercel.app",
    git:"https://github.com/Jeluskinha/react-entrega-s1-nu-kenzie-Jeluskinha"
  },
  {
    name: "Kenzie Hub",
    gif: Kenziehub,
    deploy: "https://projeto-kenziehub.vercel.app/login",
    git:"https://github.com/Jeluskinha/projetoKenziehub"
  },
  {
    name: "Rick AndMorty",
    gif: RickAndMorty,
    deploy: "https://react-s2-rick-and-morty.vercel.app",
    git:"https://github.com/Jeluskinha/react-atividade-s1-buscando-mais-personagens-Jeluskinha"
  },
  {
    name: "Mks Challange",
    gif: mksChallenge,
    deploy: "https://mks-challenge-woad.vercel.app/",
    git:"https://github.com/Jeluskinha/mks-challenge"
  },
];

// NÃO É NECESSÁRIO EDITAR ABAIXO DESTA LINHA
function ProjectList() {

  const [numProcjects, setNumProjects] = useState(0)

  useEffect(() => {
    setNumProjects(projects.length)
  },[]);

  return (
    <ProjectListStyle projects={numProcjects}>
      <ul>
        {projects.map((e) => (
          <Project name={e.name} gif={e.gif} deploy={e?.deploy} git={e?.git}/>
        ))}
      </ul>
    </ProjectListStyle>
  );
}

export default ProjectList;
