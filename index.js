require("dotenv").config();

const server = express();
const cors = require("cors")
const path = require("path")
const express = require("express");

console.log(process.env.USER); // env USER=gabriel
console.log(process.env.SHELL); // env SHELL=/bin/zhs

server.use(express.json())
server.use(cors());
server.use(express.static(path.join(__dirname,'client/build')))



if (process.env.NODE_ENV === "production") {
  console.log("this means this code is deployed");
}

const PORT = process.env.PORT || 5000;
console.log("port is -> ", PORT);


server.get("/",  (req, res)=>{
    res.sendFile(path.join(__dirname,'client/build', 'index.html'))
})

server.get("/api", (req, res) => {
  res.json({ message: `${process.env.COHORT} ROCKS` });
});

server.use((req, res) => {
  res.status(404).json({ message: "Not found sorry! " });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
