import PerfilStyle from "./styles";
import Foto from "../../../../assets/foto_perfil.jpg";

function Perfil() {
  return (
    <PerfilStyle>
      <figure>
        <img src={Foto} alt="" />
      </figure>
      <h1>Jeluskinha</h1>
      <span>Full-Stack developer</span>
    </PerfilStyle>
  );
}

export default Perfil;
