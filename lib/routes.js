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
// app.route('/insert-user').post((req,res)=>{
//     const { first, last, username, phone, email, password } = req.body
//     const hash = bcrypt.hash(password,14)

//     const userFound = users.filter(obj=>{email:obj.email})
//     try{
//         if(userFound){
//             res.redirect('/register')
//         }
//         else{
//             users.push({
//                 id: Date.now().toString(),
//                 firstname: first,
//                 lastname:last,
//                 username,
//                 email,
//                 phone,
//                 password:hash
//             })
//             res.redirect('/users')
//         }
//     }
//     catch(err){
//         res.redirect('/')
//     }
// })
// get users from database
app.route('/users').get((req,res)=>{
    res.json(users)
})

}
