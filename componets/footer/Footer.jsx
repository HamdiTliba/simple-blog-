import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Tliba</div>
      <div className={styles.text}>
        Tliba creative throughts agency - All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
