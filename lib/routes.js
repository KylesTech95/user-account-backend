const bcrypt = require('bcrypt');
const passport = require('passport')

module.exports = function(app,users){
    app.route('/').get((req,res)=>{
        res.render('index.ejs')
    })
 // ejs show registration and showlogin variables (booleans)
    const showRegistration = true;
    const showLogin = true;

    app.route('/register').get((req,res)=>{
        res.render('register.ejs',{
            showRegistration:showRegistration,
            showLogin:showLogin
        })
    })
//     // register user
app.route('/insert-user').post(async (req,res)=>{
    const { first, last, username, phone, email, password } = req.body
    const hash = await bcrypt.hash(password,11)

    try{
        users.push({
            id: Date.now().toString(),
            firstname: first,
            lastname:last,
            username,
            email,
            phone,
            password:hash
        })
        res.render('hi.ejs',{name:username})
    } 
        
    catch(err){
        console.log(err)
        res.redirect('/')
    }
})

}
