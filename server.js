require('dotenv').config();
// passport & local strategy
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const routes = require('./lib/routes.js')

// express, session, cors & body-parser
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const bodyParser = require('body-parser')

// define app
const app = express();

// define PORT
const port = !process.env.PORT?3000:process.env.PORT
// listen to server
app.listen(port,function(){
    console.log('you are listening on port '+port)
})

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/public', express.static(`${process.cwd()}/public`));


routes(app)