// alert('Hello Star Wars fans! Let\'s test your SW knowledge');

//all required elements

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

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
}

let que_count = 0;

const next_btn = document.querySelector(".next_btn");

// If next button clicked

next_btn.onclick = function() {
    que_count++;
    showQuestions(que_count);
}

//getting questions and options from array

function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<h5>' + questions[index].question + '</h5>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                     + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}