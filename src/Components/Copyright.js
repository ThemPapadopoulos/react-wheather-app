import React from "react";
import styles from './Copyright.module.scss';

const date = new Date();

const year = date.getFullYear();

const Copyright = () => {

  return (

    <div className={styles.copyright}>
      © <a href="https://www.tcoder.eu">tcoder.eu</a> {year}
    </div>

  );
};

export default Copyright;