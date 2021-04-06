import React from 'react';
import styles from './App.module.css';
import Hello from './Hello';

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messaeg}>
        <Hello name="Rect" />
        <Hello name="Gatsby" />
      </div>
    </div>
  );
};

export default App;
