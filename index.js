require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');
let hash = bcrypt.hashSync("myPlainTextPassword", 10);
console.log(hash);
let isPass = bcrypt.compareSync("Password", hash);
console.log(isPass);
// mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@jamescluster-lo661.mongodb.net/test?retryWrites=true&w=majority`), {
//     userNewUrlParser: true
// }
// const user = new User({
//     name:'Sully',
//     email:'yerDa@MHQ.com',
//     password:'hashme'
// });
// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(user.password, salt, function(err, hash) {
        
//     })
// })
// // user.save();
// User.find({}, (err, docs)=>{
//     if (err) throw err
//     console.log(docs);
// })