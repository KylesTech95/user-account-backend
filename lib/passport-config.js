const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

module.exports = function initializePassport(passport,getUser){

    // authenticate the user
    const authenticateLocal = (email,password,done,err)=>{
        const user = getUser(email)
        const compareBcrypt = async() => await bcrypt.compare(password,user.password)
        let res;
        switch(true){
            case !user:
            res = done(null,false,{message:'no user with this email'})
            break;
            case compareBcrypt:
            res = done(null,user)
            break;
            case !compareBcrypt:
            res = done(null,false,{message:'password incorrect'})
            break;
            default:
            res = done(err)
            break;
         
    }
    return res;
    }
    
    passport.use(new LocalStrategy({
        usernameField:email
    }, authenticateLocal))
    passport.serializeUser((user,done)=>{})
    passport.deserializeUser((id,done)=>{})
}


