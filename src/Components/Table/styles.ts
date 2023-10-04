import styled from 'styled-components';
import { FiMoreVertical } from 'react-icons/fi';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
`;

export const MoreIcon = styled(FiMoreVertical)`
  cursor: pointer;
  font-size: 20px;
`;