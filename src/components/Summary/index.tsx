import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import expenditureImg from '../../assets/expenditure.svg';
import totalImg from '../../assets/total.svg'


export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>$1,000.00</strong>
      </div>
      <div>
        <header>
          <p>Expenditure</p>
          <img src={expenditureImg} alt="Saídas" />
        </header>
        <strong>-$500.00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>$500.00</strong>
      </div>
    </Container>
  );
}