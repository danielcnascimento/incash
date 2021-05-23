import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './services/api';

interface ITransactions {
  id: number,
  title: string,
  amount: number,
  category: string,
  type: string,
  data: string,
}

interface ITransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<ITransactions[]>([]);

export function TransactionProvider({children}: ITransactionsProviderProps){
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  
  useEffect(()=>{
      api.get('transactions')
      .then(res => setTransactions(res.data.transactions))
  },[]);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}