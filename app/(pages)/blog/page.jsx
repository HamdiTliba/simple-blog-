import Post from "@/componets/blog/post";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

export const metadata = {
  title: "Blog page",
  description: "Blog Description ",
};
const Blog = async () => {
  const posts = await getData();
  // const posts = await getPosts();
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
