const express = require("express");
const app = express();
const cors = require("cors");
let corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(express.urlencoded());

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.send("hello");
});

app.post("/api/login", (req, res) => {
  console.log(req.body);
});

app.listen(4000, () => {
  console.log("Server is up!");
});
