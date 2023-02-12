import StatusBoxStyle from "./styles";
import html from "../../../../assets/icons/html.svg";
import css from "../../../../assets/icons/css.svg";
import javaScript from "../../../../assets/icons/javascript.svg";
import react from "../../../../assets/icons/react.svg";
import typeSCript from "../../../../assets/icons/typescript.svg";
import nodeJS from "../../../../assets/icons/Node.png";
import python from "../../../../assets/icons/python.png";
import django from "../../../../assets/icons/django.png";
import postgress from "../../../../assets/icons/postgress.png";

const iconList = [
  html, css, javaScript,
  react, typeSCript, nodeJS,
  python, django, postgress
];

function StatusBox() {
  return (
    <StatusBoxStyle>
      <ul>
        {iconList.map((icon) => (
          <li>
            <img src={icon} alt="" />
          </li>
        ))}
      </ul>
      <h2>
        Trust me
        <br />
        I'm a Developer
      </h2>
    </StatusBoxStyle>
  );
}

export default StatusBox;
