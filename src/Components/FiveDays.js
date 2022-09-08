
import React from 'react'
import styles from './FiveDays.module.scss';
import Icon from './Icon'

export default function FiveDays({ fiveDays }) {

  function dayConverter(timestamp) {
    var a = new Date(timestamp * 1000);
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var day = dayNames[a.getDay() + 1];
    var time = day != null ? day : 'Sunday';
    return time;
  }
  return (
    <div className={styles.daily}>
      <ul>
        {fiveDays.map((e, index) => (
          (index < 5) ?
            <li key={index}>
              <div>{dayConverter(e.dt)}</div>
              <Icon
          data={e.weather}
          />
              <div> {Math.round(e.temp.day)} °C </div>
            </li>
            : null
        ))}
      </ul>


    </div>
  );
}