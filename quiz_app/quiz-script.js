var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var option1 = document.getElementById('opt1');
var option2 = document.getElementById('opt2');
var option3 = document.getElementById('opt3');
var option4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex){
    var q = questions [questionIndex];
    questionEl.textContent = (questionIndex +1) + '.' + q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
};

function loadNextQuestion () {
    var selctedOption = document.querySelector('input[type=radio]:checked');
    if(!selctedOption){
        alert('Please select your answer');
        return;
    }
    var answer = selctedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selctedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score:' + score;
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
