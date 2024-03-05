import Image from "next/image";
import styles from "./userBlog.module.css";
import PostUser from "@/componets/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Erro("Error fetching");
  }
  return res.json();
};

// export const generateMetadata = async ({ params }) => {
//   const slug = params;
//   const post = await getData(slug);
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };
const BlogUser = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);

  const post = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} width={400} height={800} alt="blogImg" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.userInfo}>
          <div className={styles.userImg}>
            <Image
              src={post.img ? post.img : "/noavatar.png"}
              fill
              alt="userImg"
              className={styles.userImg}
            />
          </div>

          <div className={styles.userDetails}>
            {post && (
              <Suspense fallback={<div>loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
          </div>
        </div>

        <div className={styles.desc}>{post.desc}</div>
      </div>
    </div>
  );
};

export default BlogUser;
