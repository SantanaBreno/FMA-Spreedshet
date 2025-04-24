import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TextField, Select, MenuItem, Button } from '@mui/material';

const TableSpreadsheet = ({ data, handleChange, editMode }) => {
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
                {data.map((item, index) => (
                    <TableRow key={index}>
                        {Object.entries(item).map(([key, value]) => (
                            <TableCell key={key}>
                                {key === 'imagem' ? (
                                    <img
                                        src={value}
                                        alt="produto"
                                        style={{ width: 50 }}
                                    />
                                ) : (
                                    editMode ? (
                                        key === 'status' ? (
                                            <Select
                                                value={value}
                                                onChange={(e) => handleChange(index, key, e.target.value)}
                                                variant="standard"
                                                fullWidth
                                            >
                                                <MenuItem value="FECHADO">FECHADO</MenuItem>
                                                <MenuItem value="ABERTO">ABERTO</MenuItem>
                                                <MenuItem value="PENDENTE">PENDENTE</MenuItem>
                                            </Select>
                                        ) : (
                                            <TextField
                                                value={value}
                                                onChange={(e) => handleChange(index, key, e.target.value)}
                                                variant="standard"
                                                fullWidth
                                            />
                                        )
                                    ) : (
                                        value
                                    )
                                )}
                            </TableCell>
                        ))}

                        {/* <TableCell>{item.id}</TableCell>
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
                                    <TableCell>{item.status}</TableCell> */}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TableSpreadsheet;