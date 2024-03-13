const bcrypt = require('bcrypt');
const passport = require('passport')

module.exports = function(app,users){
    app.route('/').get((req,res)=>{
        res.render('index.ejs')
    })

    const showRegistration = true;
    const showLogin = true;

    app.route('/register').get((req,res)=>{
        res.render('register.ejs',{
            showRegistration:showRegistration,
            showLogin:showLogin
        })
    })
    


}