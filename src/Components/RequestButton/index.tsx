import styled from "styled-components";
import Spinner from "../Spinner";

interface RequestButtonProps {
  isLoading: boolean;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
  text: string;
}

const RequestButtonWrapper = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 1rem;
  width: 300px;
`;

const RequestButton = ({ isLoading, onClick, text }: RequestButtonProps) => {
  return (
    <RequestButtonWrapper onClick={onClick}>
      {isLoading ? <Spinner /> : text}
    </RequestButtonWrapper>
  );
};

export default RequestButton;
