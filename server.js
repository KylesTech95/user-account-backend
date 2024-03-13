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
const users = []
const initializePassport = require('./lib/passport-config')
const flash = require('express-flash')

initializePassport(passport,email => users.find(user=>user.email===email))


// define app
const app = express();
app.set('view-engine','ejs')
// define PORT
const port = !process.env.PORT?3000:process.env.PORT
// listen to server
app.listen(port,function(){
    console.log('you are listening on port '+port)
})

// middleware
app.use('/public', express.static(__dirname + '/public'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/public', express.static(`${process.cwd()}/public`));
app.use(session({
    secret:process.env.SESSION_KEY
}))

routes(app,users)