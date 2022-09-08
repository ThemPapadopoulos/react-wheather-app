
import React from 'react'
import styles from './FiveDays.module.scss';

export default function CurrentDay({ currentDay }) {

  return (
    <div className={`Main ${styles.main}`}>

      <h2>{Math.round(currentDay)} °C</h2>

    </div>
  );
}