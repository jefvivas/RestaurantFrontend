import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 300px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #555;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const QuantityControlWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RequestButtonWrapper = styled.div`
  margin-top: 10px;
`;

export const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
  margin: 0 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`;

export const QuantityControlButton = styled.button`
  background-color: #ccc;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 50%;
`;
