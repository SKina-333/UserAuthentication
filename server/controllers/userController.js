const database = require("../configs/postgres");

const bcrypt = require('bcrypt');
//register user and password

const createUser = async (req, res) => {
    const {username, password} = req.body;
    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            throw err;
        }else{
            try {
                await database.query("INSERT INTO users (username, password) VALUES ($1,$2)", [username, hash]);
                res.send({ message: "User registered" });
            }
            catch (error) {
                console.error(error);
                res.status(400).json({ error: "Failed to create user" });
            }
        }
    })
}

module.exports = {
    createUser,
}