import Image from "next/image";
import styles from "./post.module.css";
import Link from "next/link";
const Post = ({ post }) => {
  // const imageUrl =
  //   "https://images.pexels.com/photos/16819833/pexels-photo-16819833/free-photo-of-ville-gens-monument-villes.jpeg?auto=compress&cs=tinysrgb&w=400";
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={post.img} fill alt="blogImg" className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.date}>02.02.2024</div>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.desc}>{post.desc}</div>
          <Link href={`blog/${post.slug}`} className={styles.readMore}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
