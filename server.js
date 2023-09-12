let express = require('express');//importing the express framwork as we are going to use this one
let app = express();
let port = process.env.port || 7777;
require('./config/dbConnection');
let router = require('./routers/router');

const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/view'));//pointing to directories
app.use(express.json());
app.use(express.urlencoded({extended: false}));//only parse incoming Request Object if strings or arrays
app.use('/api/cat',router);


io.on('connection',(socket)=>{
    console.log('something');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});

http.listen(port, ()=>{
    console.log('express server started');
});