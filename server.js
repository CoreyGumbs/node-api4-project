const express = require('express');
const port = process.env.PORT || 5000;

const server = express();

server.use(express.json());


server.get('/', (req, res)=>{
    const songs  = [{id: 1, name: "Final Countdown"}];
    status(200).json(songs);
});


server.listen(port, () => console.log(`Server Running on Port: ${port}`));