import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 40%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ProductLine = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
`;

export const TotalSection = styled.div`
  font-weight: bold;
  padding: 10px 0;
`;
export const ItemSection = styled.div`
  flex: 1;
  padding: 10px 0;
`;
export const PriceSection = styled.div`
  flex: 1;
  text-align: right;
  padding: 10px 0;
`;
export const RequestButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 10px;
  font-weight: bold;
`;

export const RequestCloseButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
