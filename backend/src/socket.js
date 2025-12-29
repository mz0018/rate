let io;

function initSocket(server) {
    const { Server } = require("socket.io");

    io = new Server(server, {
        cors: {
            origin: ["http://localhost:5173", "http://localhost:5174"],
            credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log("A client connected:", socket.id);

        socket.on("disconnect", () => {
            console.log("Client disconnected:", socket.id);
        });
    });

    return io;
}

function notifyNewQueue(queueTicket) {
    if (io) {
        io.emit("newQueue", queueTicket);
    }
}

module.exports = { initSocket, notifyNewQueue };
