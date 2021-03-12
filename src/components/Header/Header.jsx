import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="images/logo.png" className={styles.headerImg} />;
    </header>
  );
};

export default Header;
