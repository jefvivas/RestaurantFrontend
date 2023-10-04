import { ModalContent, ModalOverlay } from "./styles";

interface responseModalProps {
  onClose: () => void;
  message: string;
}

const ResponseModal = ({ onClose, message }: responseModalProps) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ResponseModal;
