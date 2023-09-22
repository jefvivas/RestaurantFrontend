import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #f7d4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const CategoryHeader = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const GroupContainer = styled.div`
  background-color: #707070;
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 25px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
