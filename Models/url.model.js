const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        requierd: true
    },
    shortUrl: {
        type: String,
        unique: true
    },
    clickCount: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("urlshort", urlSchema);