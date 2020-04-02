import React from 'react';
import styles from './Booking.module.scss';
import PropsTypes from 'prop-types';


const Booking = ({match}) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    <p> id: {match.params.id}</p>
  </div>
);

Booking.propTypes = {
  match: PropsTypes.node,
};

export default Booking;
