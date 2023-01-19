import MediaStyle from "./styles";
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {SiYoutube} from 'react-icons/si'

function Media() {
  return (
    <MediaStyle>
      <a href="https://www.linkedin.com/in/jeluskinha/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
      <a href="https://github.com/Jeluskinha/" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
      <a href="https://www.youtube.com/watch?v=J-utt9boj6o&t=973s" target="_blank" rel="noopener noreferrer"><SiYoutube/></a>
    </MediaStyle>
  );
}

export default Media;
