var questions = [
    {
        question: "CSS stands for?",
        option1: "Cascading Style sheet",
        option2: "Cascading Styling sheet",
        option3: "Cascading super sheet",
        correctAns: "Cascading Style sheet",
    },
    {
        question: "HTML stands for?",
        option1: "Hyper Text markup language",
        option2: "Hyper Link markup language",
        option3: "Hyper Text makeup language",
        correctAns: "Hyper Text markup language",
    },
    {
        question: "Src in Html stands for?",
        option1: "Senior respectable company",
        option2: "Source",
        option3: "Student representative council",
        correctAns: "Source",
    },
    {
        question: "Href stands for?",
        option1: "Hype Text referal",
        option2: "Hyper Text reference",
        option3: "Hyper Text request",
        correctAns: "Hyper Text reference",
    },
    {
        question: "UTF stands for?",
        option1: "Unicode transfer format",
        option2: "Universal transmit format",
        option3: "Unicode transformation format",
        correctAns: "Unicode transformation format",
    },
    {
        question: "How many days in February?",
        option1: "30",
        option2: "28",
        option3: "29",
        correctAns: "28",
    },
];

var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var button = document.getElementById("btn");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 1;
var sec = 59;


function resetQuiz() {
    index = 0;
    score = 0;
    min = 1;
    sec = 59;
    button.disabled = false;
    nextQuestion();
}

setInterval(function () {
    timer.innerHTML = `${min}:${sec}`;
    sec--;
    if (sec < 0) {
        min--;
        sec = 59;
    }
    if (min < 0) {
        min = 1;
        sec = 59;
        nextQuestion();
    }
}, 1000);

function nextQuestion() {
    var getOptions = document.getElementsByName("options");

    for (var i = 0; i < getOptions.length; i++) {
        if (getOptions[i].checked) {
            var selectedValue = getOptions[i].value;

            var selectedQues = questions[index - 1]["question"];
            var selectedAns = questions[index - 1][`option${selectedValue}`];
            var correctAns = questions[index - 1]["correctAns"];
            if (selectedAns == correctAns) {
                score++;
            }
        }
        getOptions[i].checked = false;
    }

    button.disabled = true;

    if (index > questions.length - 1) {
        Swal.fire({
            title: "Quiz Completed!",
            text: `Your percentage is ${((score / questions.length) * 100).toFixed(2)}%`,
            showCancelButton: true,
            confirmButtonText: "Start Again",
            cancelButtonText: "Close",
        }).then((result) => {
            if (result.isConfirmed) {
                resetQuiz(); 
            }
        });
    } else {
        para.innerHTML = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
}

function clicked() {
    button.disabled = false;
}

nextQuestion();
