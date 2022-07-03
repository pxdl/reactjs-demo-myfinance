import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { TransactionsContext, TransactionType } from "../../TransactionsContext";

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import expenditureImg from '../../assets/expenditure.svg'

import { Container, TypeContainer, TypeButton } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { addTransaction } = useContext(TransactionsContext);

  const [name, setTransactionName]         = useState('');
  const [amount, setTransactionAmount]     = useState(0);
  const [type, setTransactionType]         = useState('deposit');
  const [category, setTransactionCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await addTransaction({
      name: name,
      amount: amount,
      type: type as TransactionType,
      category: category
    });

    // Clear modal fields
    setTransactionName('');
    setTransactionAmount(0);
    setTransactionType('deposit');
    setTransactionCategory('');

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Add transaction</h2>

        <input
          type="text"
          placeholder="Name"
          value={name} 
          onChange={event => setTransactionName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={event => setTransactionAmount(Number(event.target.value))}
          inputMode="numeric"
        />
        
        <TypeContainer>
          <TypeButton
            type="button"
            onClick={() => {setTransactionType('deposit')}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img
              src={incomeImg}
              alt="Income"
            />
            <span>Income</span>
          </TypeButton>

          <TypeButton
            type="button"
            onClick={() => {setTransactionType('withdrawal')}}
            isActive={type === 'withdrawal'}
            activeColor="red"
          >
            <img
              src={expenditureImg}
              alt="Expenditure"
            />
            <span>Expenditure</span>
          </TypeButton>
        </TypeContainer>
        
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={event => setTransactionCategory(event.target.value)}
        />

        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}