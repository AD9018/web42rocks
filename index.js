require("dotenv").config();
const express = require("express");
const server = express();
console.log(process.env.USER); // env USER=gabriel
console.log(process.env.SHELL); // env SHELL=/bin/zhs
if (process.env.NODE_ENV === "production") {
  console.log("this means this code is deployed");
}
const PORT = process.env.PORT || 5000;
console.log("port is -> ", PORT);

server.get("/api", (req, res) => {
  res.json({ message: `${process.env.COHORT} ROCKS` });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
