import { DBConnections } from "@/utils/DBConnections";
import { Post } from "@/utils/models";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    DBConnections();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};
