const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://tusharpramanikbd:password@nasacluster.wkapk.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready!!!");
});

mongoose.connection.on("error", (error) => {
  console.error("Mongoose Error: ", error);
});

async function startServer() {
  // Loading planets data on start server
  try {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
  } catch (error) {
    console.error("Error: ", error);
  }

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
