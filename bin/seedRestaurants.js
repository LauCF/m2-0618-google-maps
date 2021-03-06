require('dotenv').config();

const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant');

const dburl = process.env.DBURL;
mongoose.connect(dburl).then(() => console.log(`Connected to db: ${dburl}`));


Restaurant.collection.drop();

Restaurant.create([
    {
        name: "McDonald's",
        description:"i'm loving it",
        location:{
            type: "Point",
            coordinates:[40.402958,-3.7277824]
        }
    },
    {
        name: "100 montaditos",
        description:"Jarras a 1 euro",
        location:{
            type: "Point",
            coordinates:[40.4030782,-3.7277825]
        }
    }
])
.then( () => {
    console.log("Restaurants created")
    mongoose.disconnect();
});