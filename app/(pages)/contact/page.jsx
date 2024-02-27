import Image from "next/image";
import styles from "./contact.module.css";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.forms}>
          <input type="text" placeholder="name and surname" />
          <input type="email" placeholder="email address" />
          <input
            type="tel"
            placeholder="phone number (optional)"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <textarea name="" id="" cols="30" rows="10" placeholder="message" />
        </div>
        <button className={styles.button}>Send</button>
      </div>
    </div>
  );
};

export default Contact;
