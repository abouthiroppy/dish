import React from 'react';

import styles from './hero.style.css';

class Hero extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hello:)
        </h1>
      </div>
    );
  }
}

export default Hero;