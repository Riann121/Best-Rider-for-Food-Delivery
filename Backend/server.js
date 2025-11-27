import express from 'express'
import { Server } from "socket.io";

import env from 'dotenv'
env.config({path:'.env'})

const PORT = process.env.PORT 
const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on("connection", (socket) => {
  console.log("socket is connected")
  
  //adding user [there are built in user but by this there will be another user]
  socket.on("riderAdd", (lattitude, longtitude) =>{
    addRider(lattitude, longtitude);
  })


});

httpServer.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
});