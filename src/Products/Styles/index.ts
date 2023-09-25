import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #f7d4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 350px;
`;

export const CategoryHeader = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const GroupContainer = styled.div`
  background-color: #f7f7f7;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
