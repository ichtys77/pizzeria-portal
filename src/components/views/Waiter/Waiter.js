import React from 'react';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const demoContent = [
  {table: '1', status: 'free', order: null},
  {table: '2', status: 'thinking', order: null},
  {table: '3', status: 'ordered', order: '987654'},
  {table: '4', status: 'prepared', order: '876543'},
  {table: '5', status: 'delivered', order: '765432'},
  {table: '6', status: 'paid', order: '654321'},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>thinking</Button>
          <Button color="primary" variant="contained" href={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
        </>
      );
    case 'thinking':
      return (
        <Button color="primary" variant="contained" href={`${process.env.PUBLIC_URL}/waiter/order/new`}>new order</Button>
      );
    case 'ordered':
      return (
        <Button>prepared</Button>
      );
    case 'prepared':
      return (
        <Button>delivered</Button>
      );
    case 'delivered':
      return (
        <Button>paid</Button>
      );
    case 'paid':
      return (
        <Button>free</Button>
      );
    default:
      return null;
  }
};

const Waiter = () => (
  <Paper className={styles.component}>

    <Typography variant="h5">WAITER WORKFLOW</Typography>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Order ID</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.table}>
            <TableCell component="th" scope="row">
              {row.table}
            </TableCell>
            <TableCell>
              {row.order && (
                <Button variant="contained" href={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                  {row.order}
                </Button>
              )}
            </TableCell>
            <TableCell>
              {row.status}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Waiter;
