function showDetails(course, button) {
    const popup = document.getElementById(`details-${course}`);
    const rect = button.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY}px`; // Position below the button
    popup.style.left = `${rect.left}px`; // Align with the button
    popup.classList.add('show'); // Add the show class to display it
}

function hideDetails() {
    const popups = document.querySelectorAll('.details-popup');
    popups.forEach(popup => {
        popup.classList.remove('show'); // Remove the show class to hide it
    });
}

// Function to open the modal
function openModal(courseId) {
    const modal = document.getElementById('enrollModal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('enrollModal');
    modal.style.display = 'none';
}

// Function to handle course enrollment
function enrollCourse(duration) {
    const enrollDate = new Date();
    let endDate;

    switch (duration) {
        case '1 Week':
            endDate = new Date(enrollDate.setDate(enrollDate.getDate() + 7));
            break;
        case '2 Weeks':
            endDate = new Date(enrollDate.setDate(enrollDate.getDate() + 14));
            break;
        case '3 Weeks':
            endDate = new Date(enrollDate.setDate(enrollDate.getDate() + 21));
            break;
        case '1 Month':
            endDate = new Date(enrollDate.setMonth(enrollDate.getMonth() + 1));
            break;
        default:
            endDate = enrollDate;
    }

    // Format the end date
    const endDateString = endDate.toDateString();
    alert(`You have enrolled in the course! The course will end on ${endDateString}.`);

    // Close the modal after selection
    closeModal();
}

// Close the modal if clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('enrollModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Function to open the modal
function openModal(courseId) {
    const modal = document.getElementById('enrollModal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('enrollModal');
    modal.style.display = 'none';
}

// Function to handle course enrollment
function enrollCourse(duration) {
    const enrollDate = new Date();
    let endDate;

    switch (duration) {
        case '1 Week':
            endDate = new Date(enrollDate.setDate(enrollDate.getDate() + 7));
            break;
        case '2 Weeks':
            endDate = new Date(enrollDate.setDate(enrollDate.getDate() + 14));
            break;
        case '3 Weeks':
            endDate = new Date(enrollDate.setDate(enrollDate.getDate() + 21));
            break;
        case '1 Month':
            endDate = new Date(enrollDate.setMonth(enrollDate.getMonth() + 1));
            break;
        default:
            endDate = enrollDate;
    }

    // Format the end date
    const endDateString = endDate.toDateString();
    alert(`You have enrolled in the course! The course will end on ${endDateString}.`);

    // Close the modal after selection
    closeModal();
}

// Close the modal if clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('enrollModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};


function viewDetails() {
    // Code to show course details
    alert("Displaying course details...");
}

function intoCourse() {
    // Code to go into course content
    alert("Navigating into the course...");
}

function showPopup() {
    const popup = document.getElementById("popupWindow");
    const button = document.getElementById("viewDetailsButton");
    
    // Get the position of the button
    const rect = button.getBoundingClientRect();
    
    // Set the popup position
    popup.style.left = `${rect.left}px`;
    popup.style.top = `${rect.bottom + window.scrollY + 5}px`; // Position below the button
    popup.style.display = "block"; // Show the popup
}

function hidePopup() {
    document.getElementById("popupWindow").style.display = "none"; // Hide the popup
}

let totalSeconds = 0; // Total seconds for the timer
let countdownInterval; // Interval for the countdown

// Function to enroll in the course and start the timer
function enrollCourse(duration) {
    switch (duration) {
        case '1 Week':
            totalSeconds = 7 * 24 * 60 * 60; // 1 week in seconds
            break;
        case '2 Weeks':
            totalSeconds = 14 * 24 * 60 * 60; // 2 weeks in seconds
            break;
        case '3 Weeks':
            totalSeconds = 21 * 24 * 60 * 60; // 3 weeks in seconds
            break;
        case '1 Month':
            totalSeconds = 30 * 24 * 60 * 60; // 1 month in seconds
            break;
        default:
            totalSeconds = 0; // Default to 0 if no valid duration is found
    }

    // Start the countdown
    startCountdown();
    closeModal(); // Close the modal after enrolling
}

// Function to start the countdown
function startCountdown() {
    countdownInterval = setInterval(updateCountdown, 1000); // Update countdown every second
}

// Function to update the countdown display
function updateCountdown() {
    if (totalSeconds <= 0) {
        clearInterval(countdownInterval); // Clear the interval when time is up
        return; // Exit the function if no time left
    }

    totalSeconds--; // Decrement the total seconds

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    // Update the countdown display
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

// Function to end the timer
function endTimer() {
    clearInterval(countdownInterval); // Stop the countdown
    totalSeconds = 0; // Set total seconds to 0 to reset the timer
    updateCountdown(); // Update the countdown display to show 0
    alert("You have successfully completed the course and have been unenrolled from the current course.");
}

// Function to display initial timer values as 0
function displayInitialTimer() {
    totalSeconds = 0; // Ensure totalSeconds is 0
    updateCountdown(); // Update the display to show 0s
}

// Call function to set initial timer display to zero
window.onload = function() {
    displayInitialTimer();
};


// JavaScript for search functionality
function filterCourses() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const courses = document.querySelectorAll('.course-card');
    let hasResults = false;

    courses.forEach(course => {
        const title = course.getAttribute('data-title').toLowerCase();
        if (title.includes(searchValue)) {
            course.style.display = 'block'; // Show course if it matches
            hasResults = true; // Found a match
        } else {
            course.style.display = 'none'; // Hide course if it doesn't match
        }
    });

    // Display "No results" message if no courses match
    document.getElementById('noResults').style.display = hasResults ? 'none' : 'block';
}

// Other JavaScript functions remain the same (modal, countdown, etc.)
