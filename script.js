alert('Hello Star Wars fans! Let\'s test your SW knowledge');

//all required elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");

// If Start Quiz button clicked

start_btn.onclick = function() {
    info_box.classList.add("activeInfo"); //show the info box
}

// If quit button clicked

quit_btn.onclick = function() {
    info_box.classList.remove("activeInfo"); //hide the info box
}

// If continue button clicked

continue_btn.onclick = function() {
    info_box.classList.remove("activeInfo"); //hide info box 
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(0);
    questionCount(1)
}

let que_count = 0;
let que_numb = 1;
let user_score = 0;

const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = function() {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    let que_count = 0;
    let que_numb = 1;
    let user_score = 0;
    showQuestions(que_count);
    questionCount(que_numb);
    next_btn.style.display = "none";
}

quit_quiz.onclick = function() {
    window.location.reload();
}

// If next button clicked

next_btn.onclick = function() {
    if(que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        questionCount(que_numb);
        next_btn.style.display = "none";
    } else {
        console.log('Questions completed');
        showResultBox();
    }
}

//getting questions and options from array

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<h5>' + questions[index].numb + '. ' + questions[index].question + '</h5>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fa fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa fa-times"></i></div>';

function optionSelected(answer) {
    console.log(user_score)
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns === correctAns) {
        user_score += 1;
        answer.classList.add("selected");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("selected");
        console.log("Answer is wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);
    }

// Once user selected disable all options

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

function showResultBox() {
    info_box.classList.remove("activeInfo"); //hide hte info box
    quiz_box.classList.remove("activeQuiz"); //hide the quiz box
    result_box.classList.add("activeResult"); //show the result box
    const scoreText = result_box.querySelector(".score_text");
    if (user_score > 7) {
        let scoreTag = '<span>Got you correctly<br><p>'+ user_score +'</p> out of <p>'+ questions.length +'</p><br>questions!<br>Strong the force with you is!</span>';
        scoreText.innerHTML = scoreTag;
    } else if (user_score < 7 && user_score > 4) {
        let scoreTag = '<span>Got you correctly<br><p>'+ user_score +'</p> out of <p>'+ questions.length +'</p><br>questions.<br>Well have you done!</span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span>Got you only<br><p>'+ user_score +'</p> out of <p>'+ questions.length +'</p><br>questions right...<br>Again try you must!</span>';
        scoreText.innerHTML = scoreTag; 
    }
}

function questionCount(index) {
    const bottom_ques_counter = quiz_box.querySelector(".question_counter");
    let totalQuestionCountTag = '<span><p>'+ index +'</p><p>of</p><p>'+ questions.length +'</p></span>';
    bottom_ques_counter.innerHTML = totalQuestionCountTag;
}
