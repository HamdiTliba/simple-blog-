import { deletePost } from "@/lib/action";
import styles from "./adminPost.module.css";
import Image from "next/image";
import { getPosts } from "@/lib/data";

const AdminPost = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.details}>
            <Image
              src={post.img || "/noavatar.png"}
              width={50}
              height={50}
              alt={post.title}
            />
            <span>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" value={post.id} name="id" />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPost;
