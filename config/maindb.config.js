import * as mongoose from "mongoose";

const MONGODB_URL =
  process.env.MONGODB_URL || "http://127.0.0.1/celerity/sandbox";

export const connectToDB = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Succesfully connected to DB");
    })
    .catch((error) => {
      throw error;
    });
};
