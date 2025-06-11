import styled from 'styled-components';

export const TableContainer = styled.div`
    width: 97%;
    overflow-x: auto;
    padding: 0 1rem 0 1rem;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: 'Roboto', sans-serif;
`;

export const TableHead = styled.thead`
    background-color: #fff;
`;

export const TableHeader = styled.th`
    font-family: 'Poppins', sans-serif;
    padding: 0.75rem;
    size: 0.8125rem;
    text-align: left;
    font-weight: 500;
    color: #CC623780;
    border-bottom: 2px solid #CC62371A;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #CC62371A;
    margin-left: 1rem;
    color: #657593;
    font-weight: 400;
    font-size: 0.75rem;
`;

export const Dot = styled.span<{ isActive: boolean }>`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 0.5rem;
  background-color: ${({ isActive }) => (isActive ? '#00C853' : '#D50000')};
  border-radius: 50%;
`;
