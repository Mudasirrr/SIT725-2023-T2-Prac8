let express = require('express');//importing the express framwork as we are going to use this one
let app = express();
let port = process.env.port || 3000;
require('./config/dbConnection');
let router = require('./routers/router');

app.use(express.static(__dirname + '/view'));//pointing to directories
app.use(express.json());
app.use(express.urlencoded({extended: false}));//only parse incoming Request Object if strings or arrays
app.use('/api/cat',router);

app.listen(port, ()=>{
    console.log('Server started: Visit browser and write" Localhost:3000" to access the application');
});