import ProjectStyle from "./styles";
import {AiFillGithub} from 'react-icons/ai'

function Project({name, gif, deploy, git}) {
  return (
    <ProjectStyle>
      <h3>{name}</h3>
      <figure>
        <img src={gif} alt="" />
      </figure>
      <nav>
        {deploy && <a href={deploy} target="_blank" rel="noopener noreferrer">Visualizar</a>}
        {git && <a href={git} target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>}
      </nav>
    </ProjectStyle>
  );
}

export default Project;
