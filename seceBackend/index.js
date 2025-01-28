const express = require("express");
const path = require("path");
const mdb = require('mongoose');
const dotenv = require("dotenv");
// const { default: SignUp } = require("../React-Project/src/components/functionalComponets/SignUp");
const app = express();
const SignUp = require('./models/signupSchema');

app.use(express.json());
dotenv.config()
mdb.connect(process.env.MONGODB_URL).then(() => {
    console.log("MongoDB Connection Sucessful")
}).catch((e) => {
    console.log("MongoDB Connection Not Sucessful", e);
})
app.get('/', (req, res) => {
});
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get('/json', (req, res) => {
    res.json({ "Name": "Ajay" });
});
app.listen(1001, () => {
    console.log("Server Started");
});
app.get('/getAccounts', async (req, res) => {
    var datas = await SignUp.find({});
    res.send(datas);
})

app.post('/insert', async (req, res) => {
    var { firstName, lastName, username, email, password } = req.body;
    let insertData = new SignUp({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
    })
    await insertData.save();
    res.send("inserted the records");
})
app.post('/updatedet', async (req, res) => {
    await SignUp.findOneAndUpdate({ "username": "" })
})

