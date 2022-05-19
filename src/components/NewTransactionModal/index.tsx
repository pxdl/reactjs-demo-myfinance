import { useState } from "react";
import Modal from "react-modal";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import expenditureImg from '../../assets/expenditure.svg'

import { Container, TransactionTypeContainer, TransactionTypeButton } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState('deposit');

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

      <Container>
        <h2>Add transaction</h2>

        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Amount" inputMode="numeric" />
        
        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            onClick={() => {setTransactionType('deposit')}}
            isActive={transactionType === 'deposit'}
            activeColor='green'
          >
            <img
              src={incomeImg}
              alt="Income"
            />
            <span>Income</span>
          </TransactionTypeButton>

          <TransactionTypeButton
            type="button"
            onClick={() => {setTransactionType('withdrawal')}}
            isActive={transactionType === 'withdrawal'}
            activeColor="red"
          >
            <img
              src={expenditureImg}
              alt="Expenditure"
            />
            <span>Expenditure</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>
        
        <input type="text" placeholder="Category" />

        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}