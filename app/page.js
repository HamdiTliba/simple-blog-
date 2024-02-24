import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Throughts Agency.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          architecto quis tempore doloribus impedit asperiores voluptatum
          praesentium aliquam. Fugit fuga, rem deleniti architecto hic eos nulla
          doloribus magni consequatur assumenda atque modi iure delectus
          provident.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.contact}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brands"
            className={styles.brandImg}
            fill
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" fill alt="hero" />
      </div>
    </div>
  );
};

export default Home;
