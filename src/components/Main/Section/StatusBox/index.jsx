import StatusBoxStyle from "./styles";
import html from "../../../../assets/icons/html.svg";
import css from "../../../../assets/icons/css.svg";
import javaScript from "../../../../assets/icons/javascript.svg";
import react from "../../../../assets/icons/react.svg";
import typeSCript from "../../../../assets/icons/typescript.svg";

function StatusBox() {
  return (
    <StatusBoxStyle>
      <ul>
        <li>
          <img src={html} alt="" />
        </li>
        <li>
          <img src={css} alt="" />
        </li>
        <li>
          <img src={javaScript} alt="" />
        </li>
        <li>
          <img src={react} alt="" />
        </li>
        <li>
          <img src={typeSCript} alt="" />
        </li>
      </ul>

      <h2>Trust me<br/>I'm a Developer</h2>
    </StatusBoxStyle>
  );
}

export default StatusBox;
