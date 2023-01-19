import AsideStyle from "./styles";
import Perfil from "./Perfil";
import Adress from "./Adress";
import Media from "./Media";

function Aside() {
  return (
    <AsideStyle>
      <Perfil />
      <section>
        <Adress />
      </section>
      <Media />
    </AsideStyle>
  );
}

export default Aside;
