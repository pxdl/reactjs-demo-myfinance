import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
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
        <input type="text" placeholder="Amount" inputMode="numeric"/>
        <input type="text" placeholder="Category" />

        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
}