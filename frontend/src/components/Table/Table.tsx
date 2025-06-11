import React from 'react';
import {
  TableContainer,
  StyledTable,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Dot
} from './styles';
import { TbDotsVertical } from "react-icons/tb";
import type { DataRow } from '../../interface/Interfaces';

type TableProps = {
  data: DataRow[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            <TableHeader>Nome do evento</TableHeader>
            <TableHeader>Total de equipes</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Data</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell><Dot isActive={row.status} />{row.status ? 'Ativo' : 'Inativo'}</TableCell>
              <TableCell>
                {String(new Date(row.initialDate).getDate()).padStart(2, '0') + 
                ' a ' + 
                String(new Date(row.finalDate).getDate()).padStart(2, '0') +
                ' de ' +
                new Date(row.finalDate).toLocaleString('default', { month: 'long' })}
              </TableCell>
              <TableCell><TbDotsVertical color='#CC6237E5'/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;
