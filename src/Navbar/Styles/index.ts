import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
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
