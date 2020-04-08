import React from 'react';
import styles from './NewOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const demoData = {
  table: '6',
  people: '4',
  name: 'Parker',
  number: '666-876-678',
  date: '2020-04-05',
  time: '12:15',
  notes: 'starters',
  status: 'thinking',
};

const demoMenu = [
  {name: 'pizza margheritta', price: '5$'},
  {name: 'ravioli anatra', price: '7$'},
];

const renderActions = status => {
  switch (status) {
    case 'done':
      return null;
    case 'thinking':
      return (
        <Button color="primary" variant="contained" href={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
      );
    case 'ordered':
      return (
        <Button>preparing</Button>
      );
    default:
      return null;
  }
};

const cost = (order) => {
  let total = 0;
  let i = 0;
  while (i < order.length) {

    const priceInt = parseInt(order[i].price);
    total += priceInt;
    i++;
  }
  return total;
};

const NewOrder = () => (
  <Paper className={styles.component}>
    <Typography variant="h5">NEW ORDER</Typography>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Menu</TableCell>
          <TableCell>TOTAL PRICE</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">
            <Select
              id="select-table"
              value=""
            >
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <Select
              id="select-amount"
              value=""
            >
              <MenuItem>1</MenuItem>
              <MenuItem>2</MenuItem>
              <MenuItem>3</MenuItem>
              <MenuItem>4</MenuItem>
              <MenuItem>5</MenuItem>
              <MenuItem>6</MenuItem>
              <MenuItem>7</MenuItem>
              <MenuItem>8</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <div>{demoMenu[0].name}</div>
            <div>{demoMenu[1].name}</div>
            <Button>ADD</Button>
          </TableCell>
          <TableCell>
            {cost(demoMenu)}
          </TableCell>
          <TableCell>
            {demoData.status}
          </TableCell>
          <TableCell>
            {renderActions(demoData.status)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div className={styles.foot}>
      <TextField
        multiline={true}
        rows={4}
        label="Notes for details"
        variant="outlined">
        {demoData.notes}
      </TextField>
    </div>

  </Paper>
);

export default NewOrder;
