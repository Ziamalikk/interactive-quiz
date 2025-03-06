// Correct answers
const correctAnswers = {
    q1: "Delhi",
    q2: "Jawaharlal Nehru",
    q3: "Mars",
    q4: "William Shakespeare",
    q5: "Pacific Ocean",
    q6: "Au",
    q7: "Charles Babbage",
    q8: "Mount Everest",
    q9: "Russia",
    q10: "299,792,458 m/s"
};

document.getElementById("submitBtn").addEventListener("click", () => {
    // Show "Please Wait..." message and disable the button
    const submitButton = document.getElementById("submitBtn");
    submitButton.textContent = "Please Wait...";
    submitButton.disabled = true;

    // Simulate a delay of 3 seconds before processing the quiz
    setTimeout(() => {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = '#333333';

        let totalMarks = 0;
        let totalQuestions = Object.keys(correctAnswers).length;

        // Loop through each question to calculate marks
        for (const question in correctAnswers) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswers[question]) {
                totalMarks++; // Increment marks for correct answer
            }
        }

        // Hide the form
        const form = document.querySelector("form");
        form.style.display = 'none';

        // Show the result section
        const result = document.querySelector("#result");
        result.style.marginTop = "20px";
        result.style.display = 'flex';
        result.style.flexDirection = "column";
        result.style.alignItems = "center";
        result.style.color = "white";

        // Display the score
        const scoreDisplay = document.getElementById("score");
        scoreDisplay.textContent = `Your quiz score is ${totalMarks} out of ${totalQuestions}`;

        // Reset button text and enable it again
        submitButton.textContent = "Submit";
        submitButton.disabled = false;
    }, 3000); // 3000 milliseconds = 3 seconds
  
    
});

