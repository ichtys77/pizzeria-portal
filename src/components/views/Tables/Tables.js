import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const demoContent = [

  {time: '12:00-12.30',
    table1: ['booked', 'xyz098'],
    table2: ['free', ''],
    table3: ['free', ''],
  },

  {time: '12:30-13.00',
    table1: ['booked', 'xyz098'],
    table2: ['free', ''],
    table3: ['free', ''],
  },

  {time: '13:00-13.30',
    table1: ['booked', 'xyz098'],
    table2: ['free', ''],
    table3: ['event', 'ghi123'],
  },

  {time: '13:30-14.00',
    table1: ['booked', 'xyz098'],
    table2: ['free', ''],
    table3: ['event', 'ghi123'],
  },

  {time: '14:00-14.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['event', 'ghi123'],
  },

  {time: '14:30-15.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['event', 'ghi123'],
  },

  {time: '15:00-15.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['event', 'ghi123'],
  },

  {time: '16:00-16.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['event', 'ghi123'],
  },

  {time: '16:30-17.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
  },

  {time: '17:00-17.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
  },

  {time: '17:30-18.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
  },

  {time: '18:00-18.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
  },

  {time: '18:30-19.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
  },

  {time: '19:00-19.30',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
  },

  {time: '19:30-20.00',
    table1: ['free', ''],
    table2: ['free', ''],
    table3: ['free', ''],
  },

];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button className={styles.button} variant="contained" color="primary" href={`${process.env.PUBLIC_URL}/tables/booking/new`}>Book Table</Button>
          <Button className={styles.button} variant="contained" color="primary" href={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Button>
        </>
      );
    case 'booked':
      return (
        <>
          <Button className={styles.button} variant="contained" href={`${process.env.PUBLIC_URL}/tables/booking/xyz098`}>xyz098</Button>
          <Button className={styles.button} color="secondary" >Remove booking</Button>
        </>
      );
    case 'event':
      return (
        <>
          <Button className={styles.button} variant="contained" href={`${process.env.PUBLIC_URL}/tables/events/ghi123`}>ghi123</Button>
          <Button className={styles.button} color="secondary">Remove event</Button>
        </>
      );
    default:
      return null;
  }
};

const Tables = () => (

  <Paper className={styles.component}>

    <div className={styles.calendar}>
      <form noValidate>
        <TextField
          className={styles.input}
          id="date"
          label="Date"
          type="date"
          defaultValue="2020-03-05"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    </div>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>HOUR</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.time}
            </TableCell>
            <TableCell>
              {renderActions(row.table1[0])}
            </TableCell>
            <TableCell>
              {renderActions(row.table2[0])}
            </TableCell>
            <TableCell>
              {renderActions(row.table3[0])}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>

  </Paper>

);

export default Tables;
