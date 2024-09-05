const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://tusharpramanikbd:password@nasacluster.wkapk.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready!!!");
});

mongoose.connection.on("error", (error) => {
  console.error("Mongoose Error: ", error);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
