import React from 'react';
import styles from './Booking.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropsTypes from 'prop-types';

const demoData = {
  table: '6',
  people: '4',
  name: 'Parker',
  number: '666-876-678',
  date: '2020-04-05',
  time: '12:15',
  notes: 'starters',
};

const Booking = ({match}) => (
  <Paper className={styles.component}>
    <Typography variant="h5">RESERVATION: {match.params.id} </Typography>
    <Table>
      <TableHead className={styles.tableHead}>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Contact number</TableCell>
          <TableCell>Name</TableCell>
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
            {demoData.date}
          </TableCell>
          <TableCell>
            {demoData.time}
          </TableCell>
          <TableCell>
            {demoData.number}
          </TableCell>
          <TableCell>
            {demoData.name}
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
      <Button className={styles.footcont}>EDIT BOOKING</Button>
    </div>
  </Paper>
);

Booking.propTypes = {
  match: PropsTypes.node,
};

export default Booking;
