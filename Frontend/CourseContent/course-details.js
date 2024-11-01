// course-details.js

function startCourse() {
    alert("You are about to start the 'Introduction to Ethical Hacking' course!");
}





      // Simple Quiz Submission Script
      document.getElementById('quizForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let score = 0;
        if (document.getElementById('question1').value === 'Reconnaissance') score++;
        if (document.getElementById('question2').value === 'Nmap') score++;
        document.getElementById('quizResult').textContent = `Your score: ${score}/2`;
    });