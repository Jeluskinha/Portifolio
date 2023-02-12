import TechStyle from "./styles";

function Tech() {
  return (
    <TechStyle JavaScript={95} TypeSCript={90} Python={70}>
      <ul>
        <h4>Languages</h4>
        <li>
          <div>
            <h6>JavaScript :</h6>
            <span>95 %</span>
          </div>
          <div id={'JavaScript'}></div>
        </li>
        <li>
          <div>
            <h6>TypeScript :</h6>
            <span>90 %</span>
          </div>
          <div id={'TypeScript'}></div>
        </li>
        <li>
          <div>
            <h6>Python :</h6>
            <span>70   %</span>
          </div>
          <div id={'Python'}></div>
        </li>
      </ul>
    </TechStyle>
  );
}

export default Tech;
