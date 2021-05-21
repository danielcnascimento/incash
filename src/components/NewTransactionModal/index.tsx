import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, TypeButton } from './styles';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: INewTransactionModalProps) {
  const [type, setType] = useState('');

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

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          type="text"
          placeholder="Título"
        />

        <input 
        type="number" 
          placeholder='Valor' 
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
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}