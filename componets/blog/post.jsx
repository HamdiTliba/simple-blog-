import Image from "next/image";
import styles from "./post.module.css";
const Post = ({ post }) => {
  const imageUrl =
    "https://images.pexels.com/photos/16819833/pexels-photo-16819833/free-photo-of-ville-gens-monument-villes.jpeg?auto=compress&cs=tinysrgb&w=400";
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={imageUrl} fill alt="blogImg" className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.date}>02.02.2024</div>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.desc}>{post.body}</div>
          <div className={styles.readMore}>Read More</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
