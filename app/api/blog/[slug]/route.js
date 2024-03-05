import { DBConnections } from "@/utils/DBConnections";
import { Post } from "@/utils/models";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    DBConnections();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!", error);
  }
};
