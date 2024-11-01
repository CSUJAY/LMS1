const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    instructor: String,
    rating: Number,
    price: String,
    image: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
