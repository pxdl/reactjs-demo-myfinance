import { Container } from "./styles";

interface CurrencyProps {
    amount: number;
  }

export function Currency({ amount }: CurrencyProps) {
  return(
    <Container>
        {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(amount)}
    </Container>
  );
}