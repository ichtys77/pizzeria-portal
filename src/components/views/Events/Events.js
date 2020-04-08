import React from 'react';
import styles from './Events.module.scss';
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
  day: 'Sunday',
  time: '15:00',
  name: 'businnes meeting',
  notes: 'starters',
};

const Events = ({match}) => (
  <Paper className={styles.component}>
    <div className={styles.top}>
      <Typography variant="h5">EVENT: {match.params.id} </Typography>
    </div>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Amount of people</TableCell>
          <TableCell>Day</TableCell>
          <TableCell>Hour</TableCell>
          <TableCell>Name of event</TableCell>
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
            {demoData.day}
          </TableCell>
          <TableCell>
            {demoData.time}
          </TableCell>
          <TableCell>
            {demoData.name}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <div className={styles.foot}>
      <TextField multiline={true} rows={4}label="Notes for details" variant="outlined" />
      <Button>EDIT EVENT</Button>
    </div>
  </Paper>
);

Events.propTypes = {
  match: PropsTypes.node,
};

export default Events;
