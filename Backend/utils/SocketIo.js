
import {Server} from 'socket.io'
export const createSocket=(BackendServer)=>{
    console.log("socket created");
    
    
    const io = new Server(BackendServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })
      
      let users = [];
      
      const addUser = (userId, socketId) => {
        !users.some((user) => user.userId === userId) &&
          users.push({ userId, socketId });
      };
      
      const removeUser = (socketId) => {
        users = users.filter((user) => user.socketId !== socketId);
      };
      
      const getUser = (userId) => {
        return users.find((user) => user.userId === userId);
      };
      
      io.on("connection", (socket) => {
        //when connected
        console.log("a user connected");
      
        //take userId and SocketId from user
        socket.on("addUser", (userId) => {
          addUser(userId, socket.id);
          // io.emit("getUsers", users);
          io.emit("getUsers",JSON.stringify(users))
        });
      
        //send and get message
        socket.on("sendMessage", ({ senderId, receiverId, text }) => {
            console.log(text);
          const user = getUser(receiverId);
      
          io.to(user?.socketId).emit("getMessage", {
            sender: senderId,
            text,
          });
        });
      
        //when disconnected
        socket.on("disconnect", () => {
          console.log("a user disconnected");
          removeUser(socket.id);
          // io.emit("getUsers", users);
          io.emit("getUsers",JSON.stringify(users))
        });
      });
      
}