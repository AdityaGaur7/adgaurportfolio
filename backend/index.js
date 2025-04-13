import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

const activeUsers = new Map();
//fix issue: when same ip user opens the website in two diffrent devices and closes in of them the active visitors count becomes 0 bit it needs to zero as the same ip user has open the website on his other device with same ip
io.on("connection", (socket) => {
    let userIP = socket.handshake.headers["x-forwarded-for"] || socket.handshake.address;
    if (typeof userIP === "string") {
        userIP = userIP.split(",")[0].trim();
    }

    if (activeUsers.has(userIP)) {
        activeUsers.set(userIP, activeUsers.get(userIP) + 1);
    } else {
        activeUsers.set(userIP, 1);
        io.emit("new-user", userIP);
    }

    io.emit("active-users", activeUsers.size);

    socket.on("disconnect", () => {
        if (activeUsers.has(userIP)) {
            let count = activeUsers.get(userIP);
            if (count === 1) {
                activeUsers.delete(userIP);
            } else {
                activeUsers.set(userIP, count - 1);
            }
        }
        io.emit("active-users", activeUsers.size);
    });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`✅ WebSocket Server running on http://localhost:${PORT}`);
});