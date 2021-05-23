import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface ITransactions {
  id: number,
  title: string,
  amount: number,
  category: string,
  type: string,
  data: string,
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(()=>{
    api.get('transactions')
    .then(res => setTransactions(res.data.transactions))
  },[])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
          <tr key={transaction.id} >
            <td>{transaction.title}</td>
            <td className={transaction.type} >{transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{transaction.data}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}