import mongoose from "mongoose";

const connection = {};
export const DBConnections = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    await mongoose.connect(process.env.MONGODB);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
