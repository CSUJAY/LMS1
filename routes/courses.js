const express = require('express');
const router = express.Router();
const Course = require('../models/course');

// Seed database with some example courses (for demonstration)
async function seedCourses() {
    await Course.deleteMany({});

    const courses = [
        {
            title: "Introduction to Python",
            instructor: "John Doe",
            rating: 5,
            price: "$99.99",
            image: "https://via.placeholder.com/250x150.png?text=Course+1"
        },
        {
            title: "Web Development Bootcamp",
            instructor: "Jane Smith",
            rating: 4,
            price: "$89.99",
            image: "https://via.placeholder.com/250x150.png?text=Course+2"
        },
        {
            title: "Data Structures & Algorithms",
            instructor: "Alex Johnson",
            rating: 5,
            price: "$79.99",
            image: "https://via.placeholder.com/250x150.png?text=Course+3"
        }
    ];

    await Course.insertMany(courses);
    console.log("Database seeded with courses");
}
seedCourses();

// Get all courses
router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

module.exports = router;
