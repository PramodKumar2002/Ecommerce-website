const mongoose = require("mongoose");
const url = "mongodb+srv://Pramod8785:pramod1@cluster0.hxuff.mongodb.net/ecofriendly?retryWrites=true&w=majority&appName=Cluster0";
//asyncronous function - returns Promise
mongoose.connect(url)
    .then((result) => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);

    });

module.exports = mongoose;