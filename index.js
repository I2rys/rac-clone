//Dependencies
const Express = require("express")
const Path = require("path")
const Fs = require("fs")

//Variables
const Port = process.env.PORT || 8080
const Web = Express()

//Main
Web.use(Express.static(Path.resolve(__dirname, "public")), function(req, res){
    if(req.path == "/bans"){
        var database = Fs.readFileSync("./database.json", "utf8")
        database = JSON.parse(database)

        res.status(200).json(database)
    }
})

Web.listen(Port, ()=>{
    console.log(`Server is running in port ${Port}`)
})