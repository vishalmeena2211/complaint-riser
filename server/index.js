const express = require("express");
const {dbconnect} = require("./config/database");
const routes = require("./routes/route");
const cookieParser = require('cookie-parser');


dbconnect();
const port = 5000;

const app = express();
var cors = require('cors');
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json()); 
app.use(cookieParser());
app.use("/api/v1",routes);

app.listen(port,(req,res)=>{
    console.log(`server start at ${port} port number`);
})

app.get("/",(req,res)=>{
    res.send("hello jee");
})
