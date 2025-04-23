import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material';

import { ColumnContainer, TitleCell, Cell } from "./styles";

const TableSpreadsheet = ({ data }) => {
    return (
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>ITEM</TableCell>
            <TableCell>QUANT</TableCell>
            <TableCell>PRODUTO</TableCell>
            <TableCell>DESCRIÇÃO</TableCell>
            <TableCell>AMBIENTE</TableCell>
            <TableCell>IMAGEM</TableCell>
            <TableCell>DIMENSÃO</TableCell>
            <TableCell>FORNECEDOR</TableCell>
            <TableCell>PRAZO DE ENTREGA</TableCell>
            <TableCell>VALOR UNITÁRIO</TableCell>
            <TableCell>VALOR TOTAL FINAL</TableCell>
            <TableCell>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.item}</TableCell>
              <TableCell>{item.quant}</TableCell>
              <TableCell>{item.produto}</TableCell>
              <TableCell>{item.descricao}</TableCell>
              <TableCell>{item.ambiente}</TableCell>
              <TableCell>
                <img src={item.imagem} alt={item.produto} style={{ width: 50 }} />
              </TableCell>
              <TableCell>{item.dimensao}</TableCell>
              <TableCell>{item.fornecedor}</TableCell>
              <TableCell>{item.prazoEntrega}</TableCell>
              <TableCell>R$ {item.valorUnitario.toLocaleString('pt-BR')}</TableCell>
              <TableCell>R$ {item.valorFinal.toLocaleString('pt-BR')}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
};

// const TableColumn = ({ title }) => {
//     return (
//        <ColumnContainer>
//        <TitleCell>
//             <span><b>{title}</b></span>
//         </TitleCell>
//         <Cell>
//             <span>{}</span>
//         </Cell>
//        </ColumnContainer>
//     );
// };

export default TableSpreadsheet;