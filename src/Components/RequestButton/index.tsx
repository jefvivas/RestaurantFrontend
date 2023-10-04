import Spinner from "../Spinner";
import { RequestButtonProps } from "../../Interfaces";
import {RequestButtonWrapper} from './styles'



const RequestButton = ({ isLoading, onClick, text }: RequestButtonProps) => {
  return (
    <RequestButtonWrapper onClick={onClick}>
      {isLoading ? <Spinner /> : text}
    </RequestButtonWrapper>
  );
};

export default RequestButton;
