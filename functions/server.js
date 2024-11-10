const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
import router from "../routes/routes-xbox-ps";
const ServerlessHttp = require("serverless-http");

const { PORT } = process.env;

// middleware for cors
server.use(cors());

// middleware for json format
server.use(express.json());

// middleware for generating token

// serve static files from server
server.use("/static-files", express.static("public"));

// routes - xbox & PS games
// const xboxPsRoutes = require("../routes/routes-xbox-ps");
// server.use(".netlify/functions/games", router);
server.get(".netlify/functions/games", (req, res) =>
  res.json({ message: "All xbox games are here" })
);

// listen to Port
server.listen(PORT, () => {
  console.log("Listening to server on ", PORT);
});

export const handler = ServerlessHttp(server);

// /* /index.html 200
