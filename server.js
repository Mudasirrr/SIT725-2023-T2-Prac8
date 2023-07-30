var express = require("express")//importing the express framwork as we are going to use this one
var app = express()

app.use(express.static(__dirname+'/public'))//pointing to directories
app.use(express.json());

app.use(express.urlencoded({ extended: false }));//only parse incoming Request Object if strings or arrays
var port = process.env.port || 3000;//// use port 3000 unless there exists a preconfigured port

//callback function for listening the app on port:3000
app.listen(port,()=>{

    console.log("App listening to: "+port)

})