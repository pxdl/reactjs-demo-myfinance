import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Web development</td>
            <td className="deposit">$3,000</td>
            <td>Development</td>
            <td>05/10/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdrawal">-$1,000</td>
            <td>House</td>
            <td>05/05/2021</td>
          </tr>
          <tr>
            <td>Web development</td>
            <td>$12,000</td>
            <td>Development</td>
            <td>05/10/2021</td>
          </tr>
          <tr>
            <td>Web development</td>
            <td>$12,000</td>
            <td>Development</td>
            <td>05/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}