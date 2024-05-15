const express = require("express");
const app = express();
const port = 3200;

app.use(express.json());

const dosenController = require("./dosen/dosen.controllers");

app.use("/dosen", dosenController);

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);