import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

const getData = async (userId) => {
  const res = await fetch(`http://localhost/api/users/${userId}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Error fetching");
  }
  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);
  // const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <div className={styles.userDetail}>
        <h1 className={styles.h1}>Author</h1>
        <h2 className={styles.h2}>{user.username}</h2>
      </div>

      <div className={styles.userDetail}>
        <h1 className={styles.h1}>Published</h1>
        <h2 className={styles.h2}>{post.createAt?.toString().slice(4, 16)}</h2>
      </div>
    </div>
  );
};

export default PostUser;
