import TechStyle from "./styles";

const mainTechs = [
  {
    name: 'JavaScript',
    percentage: 95
  },
  {
    name: 'TypeSCript',
    percentage: 90
  },
  {
    name: 'JavaScript',
    percentage: 70
  },
]

const techs = 'HTML | CSS | JavaScript | React | TypeScript | Node.js | Express.js | TypeOrm | Python | Django | PostgreSQL'

// NÃO É NECESSÁRIO EDITAR ABAIXO DESTA LINHA
function Tech() {
  return (
    <TechStyle mainTech_1={mainTechs[0].percentage} mainTech_2={mainTechs[1].percentage} mainTech_3={mainTechs[2].percentage}>
      <ul>
        <h4>Technologies</h4>
        <li>
          <div>
            <h6>{mainTechs[0].name} :</h6>
            <span>{mainTechs[0].percentage} %</span>
          </div>
          <div id={'mainTech_1'}></div>
        </li>
        <li>
          <div>
            <h6>{mainTechs[1].name} :</h6>
            <span>{mainTechs[1].percentage} %</span>
          </div>
          <div id={'mainTech_2'}></div>
        </li>
        <li>
          <div>
            <h6>{mainTechs[2].name} :</h6>
            <span>{mainTechs[2].percentage} %</span>
          </div>
          <div id={'mainTech_3'}></div>
        </li>
      </ul>
      <h6>{techs}</h6>
    </TechStyle>
  );
}

export default Tech;
