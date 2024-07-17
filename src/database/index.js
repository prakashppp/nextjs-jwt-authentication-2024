import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb://localhost:27017";

  mongoose
    .connect(connectionUrl)
    .then(() => console.log("Auth database connected successfully"))
    .catch((e) => console.log(e));
};

export default connectToDB;
