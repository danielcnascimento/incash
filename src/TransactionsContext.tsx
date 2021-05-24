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

type TransactionInput = Omit<ITransactions, 'id' | 'data'>;

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionContextData {
  transactions: ITransactions[],
  createTransaction: (transaction: TransactionInput) => void
}

export const TransactionsContext = createContext({} as ITransactionContextData);

export function TransactionProvider({children}: ITransactionsProviderProps){
  const [transactions, setTransactions] = useState<ITransactions[]>([]);
  
  useEffect(()=>{
      api.get('transactions')
      .then(res => setTransactions(res.data.transactions))
  },[]);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);

  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}