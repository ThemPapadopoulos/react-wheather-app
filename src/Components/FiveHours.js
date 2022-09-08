
import React from 'react'
import styles from './FiveHours.module.scss';
import Icon from './Icon'

export default function FiveHours({ fiveHour }) {
  function timeConverter(timestamp) {
    var a = new Date(timestamp * 1000);
    var hour = a.getHours();
    var time = hour + ':00';
    return time;
  }

  return (
    <div className={styles.hourly}>
      <ul className={styles.ul}>
        {fiveHour.map((e, index) => (
          (index < 5) ?
            <li key={index}>
              <div className={styles.hour}>{timeConverter(e.dt)} </div>
              <Icon
                data={e.weather}
              />
              <div>{Math.round(e.temp)} °C</div>
            </li>
            : null
        ))}
      </ul>


    </div>
  );
}