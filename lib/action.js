"use server";

import { signIn, signOut } from "@/lib/auth";
import { DBConnections } from "@/utils/DBConnections";
import { Post, User } from "@/utils/models";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const handleGithubSignIn = async () => {
  await signIn("github");
};
export const handleGithubSignOut = async () => {
  await signOut();
};
export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    DBConnections();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

//
export const addPost = async (prevState, formData) => {
  const { title, desc, img, slug, userId } = Object.fromEntries(formData);

  try {
    DBConnections();
    const newPost = new Post({
      title,
      desc,
      img,
      slug,
      userId,
    });

    await newPost.save();
    console.log("post saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (formData) => {
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);

  try {
    DBConnections();
    const newUser = new User({
      username,
      email,
      password,
      img,
      isAdmin,
    });
    await newUser.save();
    console.log("add user saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add user");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    DBConnections();
    await Post.findByIdAndDelete(id);
    console.log("delete post saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete post");
  }
};
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    DBConnections();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("delete user saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete user");
  }
};
