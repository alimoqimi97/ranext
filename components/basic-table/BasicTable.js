import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FixedSizeList as List } from 'react-window';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable({ rows }) {

  // console.log( JSON.parse( rows[1]).ID_object);

  console.log(typeof(rows));


  const Row = ({ index, style }) => {
    return (
      <div style={style}>
        {/* <TableCell component="th" scope="row">
          {rows[index].ID_object}
        </TableCell>
        <TableCell component="th" scope="row">
          {rows[index].ID_polygon}
        </TableCell>
        <TableCell component="th" scope="row">
          {rows[index].type}
        </TableCell>
        <TableCell component="th" scope="row">
          {rows[index].message ? 'True' : 'False'}
        </TableCell>
        <TableCell component="th" scope="row">
          {rows[index].data}
        </TableCell> */}


        {/* {rows[index].name} */}
      </div>
    );
  };


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID_object</TableCell>
            <TableCell>ID_polygon</TableCell>
            <TableCell>type</TableCell>
            <TableCell>Donnection</TableCell>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <List
            height={500}
            itemCount={rows.length}
            itemSize={35}
            width={1200}
        >
            {Row}
        </List>


          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.message}
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
