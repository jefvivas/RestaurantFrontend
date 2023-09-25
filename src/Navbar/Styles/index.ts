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

export const BillButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
`;

export const BillButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BillButtonText = styled.span`
  margin-left: 8px;
`;
