import AsideStyle from "./styles";
import Perfil from "./Perfil";
import Media from "./Media";
import Adress from "./AboutMe/Adress";
import Tech from "./AboutMe/Technologies";

function Aside() {
  return (
    <AsideStyle>
      <Perfil />
      <section>
        <Adress />
        <Tech />
      </section>
      <Media />
    </AsideStyle>
  );
}

export default Aside;
