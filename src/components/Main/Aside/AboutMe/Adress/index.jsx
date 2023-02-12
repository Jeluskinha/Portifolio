import AdressStyle from "./styles";

const adress = 
  {
    residence: 'Brasil',
    city: 'Rolândia-PR',
    age: '28'
  }


// NÃO É NECESSÁRIO EDITAR ABAIXO DESTA LINHA
function Adress() {
  return (
    <AdressStyle>
      <ul>
        <li>
          <h6>Residence: </h6>
          <span>{adress.residence}</span>
        </li>
        <li>
          <h6>City: </h6>
          <span>{adress.city}</span>
        </li>
        <li>
          <h6>Age: </h6>
          <span>{adress.age}</span>
        </li>
      </ul>
    </AdressStyle>
  );
}

export default Adress;
