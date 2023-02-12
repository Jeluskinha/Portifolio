import MediaStyle from "./styles";
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {SiYoutube} from 'react-icons/si'
import {BsTwitch} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsReddit} from 'react-icons/bs'

// ***COMO EDITAR***
// inserir o link da sua rende em formato de String, exp => "https://www.youtube.com/watch?v=J-utt9boj6o&t=973s"
// caso não tiver uma conta na midia, apenas inserir o valor => null

const media = {
  linkedin: "https://www.linkedin.com/in/jeluskinha/",
  github: "https://github.com/Jeluskinha/",  
  youtube: "https://www.youtube.com/watch?v=J-utt9boj6o&t=973s",
  twitch: null,
  facebook: null,
  instagram: null,
  twitter: null,
  reddit: null,
} 

// NÃO É NECESSÁRIO EDITAR ABAIXO DESTA LINHA
function Media() {
  return (
    <MediaStyle>
      {media.linkedin && <a href={media.linkedin} target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>}
      {media.github && <a href={media.github} target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>}
      {media.youtube && <a href={media.youtube} target="_blank" rel="noopener noreferrer"><SiYoutube/></a>}
      {media.twitch && <a href={media.twitch} target="_blank" rel="noopener noreferrer"><BsTwitch/></a>}
      {media.facebook && <a href={media.facebook} target="_blank" rel="noopener noreferrer"><AiFillFacebook/></a>}
      {media.instagram && <a href={media.instagram} target="_blank" rel="noopener noreferrer"><GrInstagram/></a>}
      {media.twitter && <a href={media.twitter} target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle/></a>}
      {media.reddit && <a href={media.reddit} target="_blank" rel="noopener noreferrer"><BsReddit/></a>}
    </MediaStyle>
  );
}

export default Media;
