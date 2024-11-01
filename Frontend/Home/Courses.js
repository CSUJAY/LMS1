// const courses = [
//     {
//         title: "Introduction to Python",
//         instructor: "John Doe",
//         rating: 5,
//         price: "$99.99",
//         image: "https://via.placeholder.com/250x150.png?text=Course+1"
//     },
//     {
//         title: "Web Development Bootcamp",
//         instructor: "Jane Smith",
//         rating: 4,
//         price: "$89.99",
//         image: "https://via.placeholder.com/250x150.png?text=Course+2"
//     },
//     {
//         title: "Data Structures & Algorithms",
//         instructor: "Alex Johnson",
//         rating: 5,
//         price: "$79.99",
//         image: "https://via.placeholder.com/250x150.png?text=Course+3"
//     }
//     // Add more courses as needed
// ];

// const courseContainer = document.getElementById('course-container');

// courses.forEach(course => {
//     const courseCard = document.createElement('div');
//     courseCard.className = 'course-card';
//     courseCard.innerHTML = `
//         <img src="${course.image}" alt="Course Image">
//         <div class="course-info">
//             <h2 class="course-title">${course.title}</h2>
//             <p class="course-instructor">Instructor: ${course.instructor}</p>
//             <div class="course-rating">
//                 ${'⭐️'.repeat(course.rating)}
//             </div>
//             <p class="course-price">${course.price}</p>
//             <div class="course-buttons">
//                 <button class="course-button">Enroll Now</button>
//                 <button class="course-button">View Details</button>
//             </div>
//         </div>
//     `;
//     courseContainer.appendChild(courseCard);
// });


async function fetchCourses() {
    const response = await fetch('/courses');
    const courses = await response.json();
    const courseContainer = document.getElementById('course-container');

    courseContainer.innerHTML = ''; // Clear existing courses

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <img src="${course.image}" alt="Course Image">
            <div class="course-info">
                <h2 class="course-title">${course.title}</h2>
                <p class="course-instructor">Instructor: ${course.instructor}</p>
                <div class="course-rating">
                    ${'⭐️'.repeat(course.rating)}
                </div>
                <p class="course-price">${course.price}</p>
                <div class="course-buttons">
                    <button class="course-button">Enroll Now</button>
                    <button class="course-button">View Details</button>
                </div>
            </div>
        `;
        courseContainer.appendChild(courseCard);
    });
}

// Call fetchCourses to load courses when the page loads
document.addEventListener('DOMContentLoaded', fetchCourses);
