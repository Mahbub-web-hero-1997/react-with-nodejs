const express = require('express');
const cors = require('cors');
const { query } = require('express');
const app = express()
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 5000;
const users = [
    { id: 1, name: "Md Mahbub Alam" },
    { id: 2, name: "Md Rayhan Alam" },
    { id: 3, name: "Md Tanvir Alam" },
    { id: 4, name: "Md Rakib Alam" },
    { id: 5, name: "Md Alamin Alam" },
    { id: 6, name: "Md Hossain Alam" },
    { id: 7, name: "Md Hasan Alam" },
];

app.get('/users', (req, res) => {
    // if (req.query.name) {
    //     const search = req.query.name.toLowerCase();
    //     const matched = users.filter(user => user.name.toLowerCase().includes(search))
    //     res.send(matched)
    // }
    // else {

    //     res.send(users)
    // }

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }

})
app.get('/user/:id', (req, res) => {
    res.send('user access successfully')
})
// app.post('/user', (req, res) => {
//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user)
//     res.send(user)
// })

app.post('/user', (req, res) => {
    console.log(req);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.listen(port, () => {
    console.log('Port Listening Successfully');
})