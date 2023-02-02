import styles from './navbar.module.css';

function navbar() {
    return (
      <div className="navbar" styles={styles.banner}> 
        <h1 classname={styles.text}>Wat in da fack</h1>
      </div>
    );
  }
  
  export default navbar;