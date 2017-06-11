const mongoose = require("mongoose");
const Movie = mongoose.Schema({

    mid:{ type: String, unique: true },
    name:{ type: String },
    release_date:{ type: String },
    category: [{type: String}],
    poster: { type: String },
    trailer: { type: String },
    description: { type : String },
    rating: { type : String },
    cast: { 
        type: Array 
    },
    review: [{
        name : {
            type: String
        },
        comment: {
            type: String
        },
        dated: {
            type: String
        },
    }]
});

module.exports = mongoose.model('Movie_detail',Movie);