import { DBConnections } from "@/utils/DBConnections";
import { User } from "@/utils/models";

export const GET = async (request, { id }) => {
  try {
    DBConnections();
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Failed to get User Fetching");
  }
};
