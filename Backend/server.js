import express from 'express'
import { Server } from "socket.io";
import http from 'http'
import env from 'dotenv'
import { updatePosition } from './user/rider.js';
env.config({path:'.env'})

const PORT = process.env.PORT 
const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on("connection", (socket) => {
  console.log("socket is connected")
  
  //adding user [there are built in user but by this there will be another user]
  // socket.on("riderAdd", (lattitude, longtitude) =>{
  //   addRider(lattitude, longtitude);
  // })

  //updates the new position of the dragged position  
  socket.on("changePosition",(riderName,newLattitude,newLongtitude)=>{
    socket.emit("newPosition",() =>{
        updatePosition(riderName, newLattitude, newLongtitude)
    })
  })

});

server.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
});
//example for sakib