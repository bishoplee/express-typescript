import express from "express";
import os from "node:os";

import config from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";

const server = express();

// static resources folder
server.use(express.static("dist"));

// templating engine
server.set("view engine", "ejs");

server.use("/api", apiRouter)

server.get("/", async (req, res) => {
  /* res.render("index", {
    initialContent: "<div class='center'><strong>Loading...</strong></div>"
  }); */
  const { initialMarkup, initialData } = await serverRender();

  res.render("index", {
    initialMarkup,
    initialData,
  });
});

server.listen(config.PORT, config.HOST, () => {
  console.info(
    `\n Express server is listening at ${config.SERVER_URL}\n`,
    `Free Memory: ${os.freemem() / 1024 / 1024}`
  )
})