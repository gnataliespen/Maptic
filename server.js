const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const authRouter = require("./routes/authRouter");
const pinRouter = require("./routes/pinRouter");
const socketController = require("./controllers/socketController");
const app = express();
const server = http.createServer(app);

const socketio = require("socket.io");

io = socketio(server);

//Connect to database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));
app.use(cookieParser());
dotenv.config();
app.use(cors());

//Define Routes
app.use("/auth", authRouter);
app.use("/pins", pinRouter);

const { port } = require("./config/config");

io.on("connection", function(socket) {
  socket.on("create pin", async newPin => {
    let pin = await socketController.createPin(newPin);
    if (pin) {
      io.emit("new pin", pin);
    }
  });
  socket.on("delete pin", async reqObj => {
    let deleted = await socketController.deletePin(reqObj);
    if (deleted) {
      io.emit("deleted pin", deleted);
    }
  });
  socket.on("create comment", async newComment => {
    let updatedPin = await socketController.comment(newComment);
    if (updatedPin) {
      io.emit("updated pin", updatedPin);
    }
  });
  socket.on("delete comment", async oldComment => {
    let updatedPin = await socketController.deleteComment(oldComment);
    if (updatedPin) {
      io.emit("updated pin", updatedPin);
    }
  });
});

server.listen(port, () => console.log(`Server started on ${port}`));

module.exports = server;
