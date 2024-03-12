const bcrypt = require('bcrypt');
const passport = require('passport')

module.exports = function(app,users){
    app.route('/').get((req,res)=>{
        res.render('index.ejs')
    })
    app.route('/register').get((req,res)=>{
        res.render('register.ejs')
    })
}