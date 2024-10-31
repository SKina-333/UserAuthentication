const database = require("../configs/postgres");

const bcrypt = require('bcrypt');
//register user and password

const createUser = async (req, res) => {
    const {username, password} = req.body;
    if (username === "" || password === ""){
        return res.status(400).json({ error: "Username and password are required." });
    }
    bcrypt.hash(password, 10, async (err, hash) => {
        if (err ) {
            
            throw err;
        }else{
            try {
                
                await database.query("INSERT INTO users (username, password) VALUES ($1,$2)", [username, hash]);
                res.status(201).json({ message: "User created successfully!" });
            }
            catch (error) {
                
                res.status(500).json({ error: "Error creating user" });
            }
        }
    })
}

module.exports = {
    createUser,
}