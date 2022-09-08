
import React from 'react'
import styles from './Main.module.scss';
import CurrentDay from './CurrentDay'
import FiveHours from './FiveHours'
import FiveDays from './FiveDays'
import Icon from './Icon'
import Copyright from './Copyright'


import useFetch from "react-fetch-hook";

export default function Main() {
  const { isLoading, data, error } = useFetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=37.9795&lon=23.7162&units=metric&exclude=alerts,minutely&appid=c1296cf526642e26ac5284205ee082c9"
  );

  return (
    <div className={`Main ${styles.main}`}>
      <div className={styles.logo}> </div>
      <h1>Weather Forecast for Athens</h1>
      {isLoading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {
        data &&

        <div>
          <h2>The temperature now</h2>

          <Icon
          data={data.current.weather}
          />

          <CurrentDay currentDay={data.current.temp} />
          <h2>The temperature for the next five hours</h2>
          <FiveHours fiveHour={data.hourly} />
          <h2>The temperature for the next five Days</h2>
          <FiveDays fiveDays={data.daily} />

          <Copyright />
        </div>

      }

    </div>
  );
}