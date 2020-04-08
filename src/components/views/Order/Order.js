import React from 'react';
import styles from './Order.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropsTypes from 'prop-types';

const demoData = {
  table: '6',
  people: '4',
  name: 'Parker',
  number: '666-876-678',
  date: '2020-04-05',
  time: '12:15',
  notes: 'starters',
  status: 'preparing',
};

const demoMenu = [
  {name: 'pizza margheritta', price: '5$'},
  {name: 'ravioli anatra', price: '7$'},
  {name: 'coffee', price: '12$'},
];

const renderActions = status => {
  switch (status) {
    case 'done':
      return null;
    case 'preparing':
      return (
        <Button>done</Button>
      );
    case 'ordered':
      return (
        <Button>preparing</Button>
      );
    default:
      return null;
  }
};

const Order = ({match}) => (
  <Paper className={styles.component}>
    <Typography variant="h5">ORDER: {match.params.id} </Typography>
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
            {demoData.table}
          </TableCell>
          <TableCell>
            {demoData.people}
          </TableCell>
          <TableCell>
            <div>{demoMenu[0].name}</div>
            <div>{demoMenu[1].name}</div>
            <div>{demoMenu[2].name}</div>
          </TableCell>
          <TableCell>
          24$
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
      <Button className={styles.footcont}>EDIT ORDER</Button>
    </div>
  </Paper>
);

Order.propTypes = {
  match: PropsTypes.node,
};

export default Order;
