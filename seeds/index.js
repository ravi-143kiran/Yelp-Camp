const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/project', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        //YOUR USER ID
        const camp = new Campground({
            author: '6495a323d032d93d025a9377',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Some wikis have an edit button or link directly on the page being viewed if the user has permission to edit the page. This can lead to a text-based editing page where participants can structure and format wiki pages with a simplified markup language, sometimes known as wikitext, wiki markup or wik',
            price,
            geometry: {
                type: "Point",
                coordinates: [cities[random1000].longitude,
                cities[random1000].latitude,]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/du7fufgsv/image/upload/v1687703479/YelpCamp/mx39s8ps4qtozwf4venx.jpg',
                    filename: 'YelpCamp/mx39s8ps4qtozwf4venx',

                },
                {
                    url: 'https://res.cloudinary.com/du7fufgsv/image/upload/v1687703480/YelpCamp/lrncvqpplrk4egekpecy.jpg',
                    filename: 'YelpCamp/lrncvqpplrk4egekpecy',

                }
            ]

        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})