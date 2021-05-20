import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(()=>{
    api.get('transactions')
    .then(res => console.log(res.data))
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Label</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td>Website development</td>
            <td className="deposit" >R$12,00</td>
            <td>Development</td>
            <td>20/02/2021</td>
          </tr>
          <tr  >
            <td>Website development</td>
            <td className="withdraw" >- R$12,00</td>
            <td>Development</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}