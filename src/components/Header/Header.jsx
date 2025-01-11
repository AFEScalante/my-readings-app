import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.backdrop}>MyReadings</div>
      <div className={styles.backdropEdge}></div>
    </header>
  );
}

export default Header;
