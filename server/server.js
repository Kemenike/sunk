const io = require("socket.io")(3000, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on('connection', socket => {
    console.log(socket.id);
})