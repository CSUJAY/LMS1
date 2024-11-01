// JavaScript to handle progress and achievements
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    let progress = 0;

    // Progress Tracker
    function updateProgress() {
        const progressBar = document.getElementById('progress-bar');
        progress = (visitedSections.size / sections.length) * 100;
        progressBar.style.width = progress + '%';
        progressBar.textContent = Math.floor(progress) + '%';

        if (progress === 100) {
            document.getElementById('achievement').classList.add('unlocked');
            document.getElementById('achievement').textContent = "Achievement Unlocked: Course Completed!";
        }
    }

    // Achievements
    let visitedSections = new Set();
    sections.forEach(section => {
        section.addEventListener('click', () => {
            visitedSections.add(section.id);
            updateProgress();
        });
    });

    // Quiz Feedback
    const quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('submit', event => {
        event.preventDefault();
        const answers = ['b', 'c', 'b'];
        let score = 0;
        answers.forEach((answer, index) => {
            const question = quizForm[`q${index + 1}`];
            if (question.value === answer) {
                score++;
                question.parentNode.style.color = 'green';
            } else {
                question.parentNode.style.color = 'red';
            }
        });
        document.getElementById('quiz-score').textContent = `You scored ${score} out of ${answers.length}`;
        if (score === answers.length) {
            document.getElementById('quiz-achievement').classList.add('unlocked');
            document.getElementById('quiz-achievement').textContent = "Achievement Unlocked: Perfect Quiz Score!";
        }
    });
});