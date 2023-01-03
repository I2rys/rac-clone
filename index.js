"use strict";

// Dependencies
const compression = require("compression")
const express = require("express")
const path = require("path")
const fs = require("fs")

// Variables
const port = process.env.PORT || 8080
const web = express()

/// Configurations
// Express
web.use(compression({ level: 1 }))

// Main
web.use(express.static(path.resolve(__dirname, "public")), function(req, res){
    if(req.path === "/bans"){
        var database = fs.readFileSync("./database.json", "utf8")
        database = JSON.parse(database)

        res.status(200).json(database)
    }
})

web.listen(port, ()=>console.log(`Server is running. Port: ${port}`))