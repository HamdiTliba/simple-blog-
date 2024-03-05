// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

import { DBConnections } from "@/utils/DBConnections";
import { Post, User } from "@/utils/models";
import { unstable_noStore } from "next/cache";

// const posts = [
//   { id: 1, title: "Post 1", body: ".............", userId: 1 },
//   { id: 2, title: "Post 2", body: ".............", userId: 1 },
//   { id: 3, title: "Post 3", body: ".............", userId: 2 },
//   { id: 4, title: "Post 4", body: ".............", userId: 2 },
// ];
export const getPosts = async () => {
  try {
    DBConnections();
    const posts = await Post.find();
    return posts;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch posts ");
  }
};
export const getPost = async (slug) => {
  try {
    DBConnections();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch post ");
  }
};
export const getUser = async (id) => {
  unstable_noStore();
  try {
    DBConnections();
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch user ");
  }
};

export const getUsers = async () => {
  try {
    DBConnections();
    const users = await User.find();
    return users;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to fetch users ");
  }
};
