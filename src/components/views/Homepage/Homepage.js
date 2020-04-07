import React from 'react';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import ChartBar from '../../features/ChartBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const demoReservation = [
  {id: 'xyz098', type: 'booked', duration: '12.00-14.00', table: 'Table 1'},
  {id: 'ghi123', type: 'event', duration: '13.00-16.30', table: 'Table 3'},
];

const demoOrders = [
  {id: 'abc123', status: 'ready', table: 'Table 2', waiter: 'Tommy'},
];

const renderActions = status => {
  switch (status) {
    case 'booked':
      return (
        <>
          <Button className={styles.button} variant="contained" href={`${process.env.PUBLIC_URL}/tables/booking/xyz098`}>xyz098</Button>
        </>
      );
    case 'event':
      return (
        <>
          <Button className={styles.button} variant="contained" href={`${process.env.PUBLIC_URL}/tables/events/ghi123`}>ghi123</Button>
        </>
      );
    case 'ready':
      return (
        <>
          <Button className={styles.button} variant="contained" href={`${process.env.PUBLIC_URL}/waiter/order/abc123`}>abc123</Button>
        </>
      );
    default:
      return null;
  }
};

const Homepage = () => (
  <div>
    <Paper className={styles.component}>
      <ChartBar />
    </Paper>

    <Paper className={styles.component}>
      <Typography variant="h5">RESERVATIONS</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Table no.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoReservation.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {renderActions(row.type)}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
              <TableCell>
                {row.duration}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <Typography variant="h5">ORDERS</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Staus</TableCell>
            <TableCell>Waiter</TableCell>
            <TableCell>Table no.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoOrders.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {renderActions(row.status)}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.waiter}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>

);

export default Homepage;
