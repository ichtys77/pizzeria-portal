import React from 'react';
import styles from './Events.module.scss';
import PropsTypes from 'prop-types';

const Events = ({match}) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    <p> id: {match.params.id}</p>
  </div>
);

Events.propTypes = {
  match: PropsTypes.node,
};


export default Events;
