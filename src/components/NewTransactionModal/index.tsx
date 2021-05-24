import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, TypeButton } from './styles';
import { TransactionsContext } from '../../TransactionsContext';
interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModalProps) {
  const transactions = useContext(TransactionsContext);

  const [value, setValue] = useState(0);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  function handleTransactionSubmit(event: FormEvent) {
    event.preventDefault();
    
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"  
      >
        <img src={closeImg} alt="close modal" />
      </button>

      <Container onSubmit={handleTransactionSubmit} >
        <h2>Cadastrar transação</h2>

        <input 
          type="text"
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number" 
          placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))} 
        />

        <TransactionTypeContainer> 
          <TypeButton
            type="button"
            onClick={ () => setType('deposit')}
            isActive={type === 'deposit'}
            activeColorType={'green'}
          >
            <img src={incomeImg} alt="entrada de caixa" />
            <span>Entrada</span>
          </TypeButton>

          <TypeButton 
            type="button"
            onClick={ () => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColorType={'red'}
          >
            <img src={outcomeImg} alt="saída de caixa" />
            <span>Saída</span>
          </TypeButton>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}