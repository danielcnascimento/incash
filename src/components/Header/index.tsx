import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface IHeaderProps {
  onOpenNewTransactionModa: () => void;
}

export function Header({onOpenNewTransactionModa}:IHeaderProps) {
    return (
      <Container>
        <Content >    
          <img src={logoImg} alt="" />
          <button type="button" onClick={onOpenNewTransactionModa} >
            Nova transação
          </button>
        
        </Content>
      </Container>
    )
}