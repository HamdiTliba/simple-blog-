import { DBConnections } from "@/utils/DBConnections";
import { User } from "@/utils/models";

export const GET = async (request) => {
  try {
    DBConnections();
    const user = await User.find();
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get User Fetching");
  }
};
