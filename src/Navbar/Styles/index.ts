import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  height: 5%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CategoryButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const OrderButton = styled.button`
  top: 0px;
  right: 0px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const OrderButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const OrderButtonText = styled.span`
  margin-left: 8px;
`;

export const CartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 10px;
`;
