var express = require("express");
var app = express();
var jwt = require("jsonwebtoken");
var cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

app.use(express.json());
app.use(cors());

const companies = [
    {
        "code" : "503021",
        "name" : "Relaince Technologies"
    },
    {
        "code" : "503022",
        "name" : "HDFC Private Limited"
    },
    {
        "code" : "503023",
        "name" : "ICICI Private Limited"
    },
]

var users = {
    username : ["saitejach127"],
    password : ["saitejach127"]
}

app.get("/companies", verifyToken, (req,res) => {
    console.log(req.user);
    return res.json(companies);
});

app.post('/register', (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    users["username"].push(username);
    users["password"].push(password);
    var user = {name : username}; 
    var token = jwt.sign(user, ACCESS_TOKEN_SECRET);
    return res.json({success : true, token});
});

app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var usernames = users["username"];
    console.log(username, password);
    var idx = usernames.findIndex((usern) => usern === username);
    if(idx === -1){
        return res.json({success : false, msg : "User does not exist"});
    }
    if(users["password"][idx] !== password){
        return res.json({success : false, msg : "Username/Password is Wrong"});
    }
    var user = {name : username};
    var token = jwt.sign(user, ACCESS_TOKEN_SECRET);
    return res.json({success : true,token});
});

function verifyToken(req,res,next) {
    var header = req.headers["authorization"];
    var token = header && header.split(" ")[1];
    if(token === null) return res.sendStatus(401);
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});