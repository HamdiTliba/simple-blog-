import Image from "next/image";
import styles from "./about.module.css";
export const metadata = {
  title: "Blog About page",
  description: "About Description ",
};
const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>About Agency</h4>
        <h1 className={styles.subtitle}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.paragraphe}>
          We create digital ideas that are bigger, bolder, braver and better. We
          beleive in good ideas, flexibility and precision. We are world&apos;s
          Our Special Team, best conculting & finance solution provider. Wide
          range of web and software development services.
        </p>
        <div className={styles.ranks}>
          <div className={styles.rank}>
            <div className={styles.number}>10 K+</div>
            <div className={styles.desc}>Year of experience</div>
          </div>
          <div className={styles.rank}>
            <div className={styles.number}>243 K+</div>
            <div className={styles.desc}>People reached</div>
          </div>
          <div className={styles.rank}>
            <div className={styles.number}>5 K+</div>
            <div className={styles.desc}>Services and plugins</div>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" fill className={styles.img} />
      </div>
    </div>
  );
};

export default About;
