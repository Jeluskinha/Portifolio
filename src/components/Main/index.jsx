import MainStyle from "./styles";
import Aside from "./Aside";
import Section from "./Section";
import Navigation from "./Navigation";

function Main() {
  return (
    <MainStyle>
      <Aside />
      <Section />
      {/* <Navigation/> */}
    </MainStyle>
  );
}

export default Main;
