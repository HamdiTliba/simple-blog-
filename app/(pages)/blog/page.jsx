import Post from "@/componets/blog/post";
import styles from "./blog.module.css";
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};
const Blog = async () => {
  const postData = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {postData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
