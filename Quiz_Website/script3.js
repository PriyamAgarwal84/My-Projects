const Questions = [
    {
        question: "Which is the national animal of India?",
        opt1: "Lion",
        opt2: "Elephant",
        opt3: "Horse",
        opt4: "Tiger",
        correct: "opt4",
    },
    {
        question: "Who is the Prime Minister of India",
        opt1: "Dr.Manmohan SIngh",
        opt2: "Narendra Modi",
        opt3: "Rahul Gandhi",
        opt4: "Akhilesh Yadav",
        correct: "opt2",
    },
    {
        question: "Which is the national bird of India",
        opt1: "Peacock",
        opt2: "Kingfisher",
        opt3: "Sparrow",
        opt4: "Wood-Pecker",
        correct: "opt1",
    },
    {
        question: "India got Independence in which year",
        opt1: "1952",
        opt2: "1947",
        opt3: "1949",
        opt4: "1945",
        correct: "opt2",
    }
];

let question_number =document.getElementById("question-number");
let question_content =document.getElementById("question-content");
let option_1 =document.getElementById("option1");
let option_2 =document.getElementById("option2");
let option_3 =document.getElementById("option3");
let option_4 =document.getElementById("option4");
let submit_button = document.getElementById("submit-btn")
let next_button= document.getElementById("next-btn")
let options=document.querySelectorAll(".option")
let current_question_number=0;
let score=0;

function displayQuestion(){

    document.querySelectorAll("input[name = opt]").forEach(option => option.checked=false)
    question_number.innerHTML=(current_question_number+1)+".";
    question_content.innerHTML=Questions[current_question_number].question;
    option_1.innerHTML=Questions[current_question_number].opt1;
    option_2.innerHTML=Questions[current_question_number].opt2;
    option_3.innerHTML=Questions[current_question_number].opt3;
    option_4.innerHTML=Questions[current_question_number].opt4;
}
displayQuestion();
submit_button.addEventListener('click', () =>{
    let optionIdselected = document.querySelector('input[name = opt]:checked');
    if(optionIdselected==null){
        alert("Please select an option");
    }
    else{
        let option_correct = Questions[current_question_number].correct;
        if(optionIdselected.id==option_correct){
            score++;
            optionIdselected.parentElement.style.backgroundColor='green';
            submit_button.style.display=('none');
            next_button.style.display=('flex');
            current_question_number++;
        }
        // if(current_question_number>=Questions.length){
        //     current_question_number=0;
        //     localStorage.setItem("score", score);
        //     location.href = "./resultPage.html";
        // }
        else{
            optionIdselected.parentElement.style.backgroundColor='red';
            submit_button.style.display=('none');
            next_button.style.display=('flex');
            current_question_number++;
        }
    }
});
next_button.addEventListener('click',()=>{
    let optionIdselected = document.querySelector('input[name = opt]:checked');
    optionIdselected.parentElement.style.backgroundColor= 'rgba(255, 255, 255, 0.203)';
    submit_button.style.display=('flex');
    next_button.style.display=('none');
    if(current_question_number>=Questions.length){
            current_question_number=0;
            localStorage.setItem("score", score);
            location.href="resultPage.html"
        }
      else{
        displayQuestion();
      }
})
