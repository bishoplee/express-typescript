import express from "express";
import os from "node:os";

import config, { PORT, HOST } from "./config";

const server = express();

// static resources folder
server.use(express.static("dist"));

// templating engine
server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    initialContent: "Loading..."
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
    `Free Memory: ${os.freemem() / 1024 / 1024}`
  )
})