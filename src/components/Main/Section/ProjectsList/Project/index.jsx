import ProjectStyle from "./styles";
import {AiFillGithub} from 'react-icons/ai'

function Project({name, gif, vercel, git}) {
  return (
    <ProjectStyle>
      <h3>{name}</h3>
      <figure>
        <img src={gif} alt="" />
      </figure>
      <nav>
        <a href={vercel} target="_blank" rel="noopener noreferrer">Visualizar</a>
        <a href={git} target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
      </nav>
    </ProjectStyle>
  );
}

export default Project;
