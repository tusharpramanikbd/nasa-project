const http = require("http");
const app = require("./app");

const { mongoConnect } = require("./services/mongo");
const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  // Loading planets data on start server
  try {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();
  } catch (error) {
    console.error("Error: ", error);
  }

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
