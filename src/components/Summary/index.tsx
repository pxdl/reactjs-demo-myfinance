import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from '../../assets/income.svg';
import expenditureImg from '../../assets/expenditure.svg';
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";
import { formatPrice } from "../../util/formatPrice";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((summary, transaction) => {
    if (transaction.type === 'deposit') {
      summary.totalDeposits += transaction.amount;
      summary.total += transaction.amount;
    }
    else if (transaction.type === 'withdrawal') {
      summary.totalExpenditures += transaction.amount;
      summary.total -= transaction.amount;
    }

    return summary;
  }, {
    totalDeposits: 0,
    totalExpenditures: 0,
    total: 0
  });

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {formatPrice(summary.totalDeposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenditure</p>
          <img src={expenditureImg} alt="Saídas" />
        </header>
        <strong>
          {formatPrice(summary.totalExpenditures)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {formatPrice(summary.total)}
        </strong>
      </div>
    </Container>
  );
}