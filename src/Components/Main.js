
import React from 'react'

import styles from './Main.module.scss';


class Main extends React.Component {
      render () {
        return <div className={styles.main}>
          Hello {this.props.name}
        </div>
      }
    }


export default Main