const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const database = require("../configs/postgres");


async function validPassword(password, hash) {
    const hashVerify = await bcrypt.compare(password, hash)
    return hashVerify;
}
  



passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const { rows } = await database.query("SELECT * FROM users WHERE username = $1", [username]);
            const user = rows[0];

            if (!user) {
                return done(null, false, { message: "Incorrect username" });
            }

            const isValid = validPassword(password, user.password);
            if (!isValid) {
                return done(null, false, { message: "Incorrect password" });
            }else{
                return done(null, user);
            }
            
        } catch(err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser(async (id, done) => {
    try {
        const { rows } = await database.query("SELECT * FROM users WHERE id = $1", [id]);
        const user = rows[0];

        done(null, user);
    } catch(err) {
        done(err);
    }
});


module.exports = { passport };