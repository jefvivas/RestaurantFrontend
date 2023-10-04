import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

export const InputField = styled.input`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 300px;
`;

export const SubmitButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
