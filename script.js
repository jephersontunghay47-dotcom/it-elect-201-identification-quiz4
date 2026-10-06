/*
=====================================================
QUESTION BANK
=====================================================

ADD NEW QUESTIONS HERE.

Example:

{
    question: "What is a blueprint for creating objects?",
    answers: [
        "class"
    ]
},

If there are multiple acceptable answers:

{
    question: "What is another name for an attribute?",
    answers: [
        "field",
        "variable"
    ]
}

=====================================================
*/

const questionBank = [

    {
        question:
            "The object written before the dot in a call, the one whose attributes the method reaches — what's it  called?",
        answers: [
            "receiver"
        ]
    },

    {
        question:
            "Java's own documentation prefers a different name for what this course calls an object method —  what is it?",
        answers: [
            "instance method"
        ]
    },

    {
        question:
            "Ten objects share a class holding one object method — how many separate copies of that method's code actually exist?",
        answers: [
            "one"
        ]
    },

    {
        question:
            "Every method in this unit reads and reports without changing anything, but methods actually  divide into two kinds depending on whether they change the object — name both.",
        answers: [
            "accessor, mutator",
        ]
    },

    {
        question:
            "A bare call inside an object method to another method of the same class is really shorthand for  writing ______ in front of it.",
        answers: [
            "this"
        ]
    },

    {
        question:
            " A method belonging to the class rather than to any object, with no attributes it can reach, is called a ______ method.",
        answers: [
            "static"
        ]
    },

    {
        question:
            "A veterinary clinic's PetRecord class has an object method ageInMonths() that uses only its own object's  ageInYears attribute and takes no parameters; two PetRecord objects, cat and dog, are created in the driver. When the driver calls cat.ageInMonths(), whose ageInYears value does the method use? ",
        answers: [
            "cat's",
        ]
    },

    {
        question:
            "Could this same call correctly be written as just ageInMonths(); with no object named, inside main?",
        answers: [
            "no"
        ]
    },

    {
        question:
            "If the driver later creates eight more PetRecord objects, does Java build eight more copies of  ageInMonths()'s code, or reuse the one that already exists?",
        answers: [
            "reuse the one"         
        ]
    },

    {
        question:
            "Which keyword, placed in a method's declaration, makes it belong to the class rather than to any  object? ",
        answers: [
            "static"
        ]
    },

    {
        question:
            "main must be able to run before any of these exist — name what.",
        answers: [
            "objects"         
        ]
    },

    {
        question:
            "Every method in this unit belongs to one of two categories, split by whether static appears in its  declaration — name both. ",
        answers: [
            "object method, static method"
        ]
    },

    {
        question:
            "A method belonging to the class rather than to any object cannot use the keyword ______, since it  has no receiver to point to.",
        answers: [
            "this"
        ]
    },

    {
        question:
            "Calling perHeadIncome() directly inside main, with no object named before it, fails to compile  because main runs in a ______ context.",
        answers: [
            "static"
        ]
    },

    {
        question:
            "A cooperative's LoanApplication class has an object method monthlyDue() that divides the loan's principal  attribute by its termMonths attribute, and a separate utility method roundToPeso(double amount) that uses only the value handed to it as a parameter. Should monthlyDue() be declared with the keyword static?",
        answers: [
            "no"
        ]
    },    

     {
        question:
            "Should roundToPeso(double amount) be declared with the keyword static?",
        answers: [
            "yes"
        ]
    },    

     {
        question:
            "Can roundToPeso reach a LoanApplication object's principal attribute directly by name?",
        answers: [
            "no"
        ]
    },    

    {
        question:
            "Which of the two methods must be called through an object reference, such as loan.monthlyDue()?",
        answers: [
            "monthlyDue() "
        ]
    },    

    {
        question:
            "perHeadIncome() needs two values yet is declared with empty parentheses — what kind of method  makes that possible?",
        answers: [
            "object method"
        ]
    },    

    {
        question:
            "The word for a method's name taken together with the number, order, and types of its parameters.",
        answers: [
            "signature"
        ]
    },    

    {
        question:
            "Besides a method's name, three things about its parameters together decide its signature — name all three.",
        answers: [
            "number, order, types"
        ]
    },    

    {
        question:
            "Calling h.perHeadIncome() reaches this object's attributes because h is written before the dot,  making it the method's ______.",
        answers: [
            "receiver"
        ]
    },   

    {
        question:
            "Writing h.perHeadIncome() calls the method through an object ______, not through the class name.",
        answers: [
            "reference "
        ]
    },   

    {
        question:
            "A campus print shop's PrintJob class has attributes pageCount and costPerPage, and a programmer is  defining a new object method totalCost() meant to multiply the two together. Should totalCost() take pageCount and costPerPage as parameters, given both are already  attributes of the object?",
        answers: [
            "no"
        ]
    },   

    {
        question:
            "Once written, how should the shop's driver call this method on a PrintJob object named job1?",
        answers: [
            "job1.totalCost()"
        ]
    },   

    {
        question:
            "If a second object job2 has different pageCount and costPerPage values, could calling  job2.totalCost() ever use job1's attributes instead?",
        answers: [
            "no"
        ]
    },   

];


/* ==============================
   QUIZ VARIABLES
============================== */

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;


/* ==============================
   NORMALIZE ANSWER
============================== */

function normalizeAnswer(answer) {
    return answer
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ");
}


/* ==============================
   SHUFFLE
============================== */

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


/* ==============================
   START QUIZ
============================== */

function startQuiz() {

    questions = shuffle(questionBank);

    currentQuestion = 0;
    score = 0;
    answered = false;

    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";

    showQuestion();
}


/* ==============================
   SHOW QUESTION
============================== */

function showQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent =
        question.question;

    document.getElementById("progressBar").style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    const input = document.getElementById("answerInput");

    input.value = "";
    input.disabled = false;

    document.getElementById("checkButton").style.display =
        "inline-block";

    document.getElementById("nextButton").style.display =
        "none";

    const feedback = document.getElementById("feedback");

    feedback.className = "feedback";
    feedback.style.display = "none";
    feedback.innerHTML = "";

    answered = false;

    input.focus();
}


/* ==============================
   CHECK ANSWER
============================== */

function checkAnswer() {

    if (answered) {
        return;
    }

    const input = document.getElementById("answerInput");

    const userAnswer = normalizeAnswer(input.value);

    if (userAnswer === "") {
        alert("Please type your answer first.");
        input.focus();
        return;
    }

    const question = questions[currentQuestion];

    const isCorrect = question.answers.some(
        answer => normalizeAnswer(answer) === userAnswer
    );

    const feedback = document.getElementById("feedback");

    if (isCorrect) {

        score++;

        feedback.className = "feedback correct";

        feedback.innerHTML =
            `<strong>Correct!</strong><br>
             Your answer: ${input.value}`;

    } else {

        feedback.className = "feedback wrong";

        feedback.innerHTML =
            `<strong>Incorrect.</strong><br>
             Correct answer:
             <strong>${question.answers[0]}</strong>`;
    }

    feedback.style.display = "block";

    input.disabled = true;

    document.getElementById("checkButton").style.display =
        "none";

    document.getElementById("nextButton").style.display =
        "inline-block";

    answered = true;
}


/* ==============================
   NEXT QUESTION
============================== */

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}


/* ==============================
   SHOW RESULT
============================== */

function showResult() {

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result").style.display = "block";

    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;

    const percentage =
        (score / questions.length) * 100;

    let message;

    if (percentage === 100) {

        message =
            "Perfect! You got everything correct.";

    } else if (percentage >= 80) {

        message =
            "Great job! Review the questions you missed.";

    } else if (percentage >= 60) {

        message =
            "Good effort. Keep reviewing the lesson.";

    } else {

        message =
            "Keep practicing and try the quiz again.";
    }

    document.getElementById("resultMessage").textContent =
        message;
}


/* ==============================
   ENTER KEY
============================== */

document.getElementById("answerInput").addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            if (!answered) {
                checkAnswer();
            } else {
                nextQuestion();
            }
        }
    }
);


/* ==============================
   START
============================== */

startQuiz();
