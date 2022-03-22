/** @format */

const cors = require("cors");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});

const generalRoutes = require("./routes/genaral.routes");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
// app.use(express.json());

// Routes
app.use(generalRoutes);

// Web Socket
io.on("connection", (socket) => {
	console.log("New connection");
	// socket.on("message", ({ message }) => {
	// 	io.emit("message", { _id, timestamp, sender, message });
	// });

	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

server.listen(PORT, () => {
	console.log("Successfully running");
});
