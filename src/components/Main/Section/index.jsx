import ProjectList from "./ProjectsList";
import StatusBox from "./StatusBox";
import SectionStyle from "./styles";


function Section() {
  return (
    <SectionStyle>
      <StatusBox/>
      <ProjectList/>
    </SectionStyle>
  );
}

export default Section;
