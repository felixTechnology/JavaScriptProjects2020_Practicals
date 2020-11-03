/*An object in  array with key-value pair
* 2. Have box with the the questions in it (https://uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924)
* 2. when we select we store the selected as an id
* 3. And check if the ID is correct
*
* */

const quizData = [

    {
        question: 'How old is President Nana Akufo Addo..?',
        a: '10',
        b: '76',
        c: '110',
        d: '71',
        correct: 'b'
    },

    {
        question: 'What is the most used programming language in 2020 ....',
        a: 'Python',
        b: 'Java',
        c: 'JavaScript',
        d: 'C#',
        correct: 'a'
    },

    {
        question: 'Where is Amalitech Training Academy Located in Ghana',
        a: 'Accra',
        b: 'Tema',
        c: 'Takoradi',
        d: 'Cape Coast',
        correct: 'c'
    },
    {
        question: 'What year was JavaScript Launched',
        a: '1996',
        b: '1993',
        c: '1997',
        d: 'None of the Above',
        correct: 'd'
    },

    {
        question: 'What does HTML stands for ',
        a: 'Cascading Style Sheet',
        b: 'Jason Object Notation',
        c: 'Hypertext Markup Language',
        d: 'Helicopter Terminals Motors Lamborginis',
        correct: 'c'
    },

    {
        question: `When was year was Ghana's independence`,
        a: '1987',
        b: '1960',
        c: '1957',
        d: '1907',
        correct: 'c'
    }




];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

/*we need to load the questions from html and we will target them through below*/
const questionEl = document.getElementById("question");/*4*/
const a_text = document.getElementById("a_text");/*5*/
const b_text = document.getElementById("b_text");/*6*/
const c_text = document.getElementById("c_text");/*7*/
const  d_text = document.getElementById("d_text");/*8*/
const  submitBtn = document.getElementById("submitBtn")


/*We add the REACT JS*/

/*Keeping Track of current question*/
let currentQuiz = 0; //giving it zero index /*1*/
/*let answer = undefined;*/
let score =0;

/*load quiz: The function will be called everything user submit*/
loadQuiz();/*2*/

function loadQuiz() {/*3*/

    deselectAnswers();

    //9. this is getting the quiz data of current question
    const  currentQuizData = quizData[currentQuiz];

    //10. passing each question properties to the html <h1></h1>
    questionEl.innerText = currentQuizData.question; /*11*/
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;/*13*/
    c_text.innerText = currentQuizData.c;/*14*/
    d_text.innerText = currentQuizData.d; /*15*/

   /* currentQuestion++;*/
}

function getSelected(){
    //console.log("joy")
       let answer = undefined;
    //callback function
    answerEls.forEach((answerEl) =>{
       /* console.log(answer.value);*/
        if (answerEl.checked){
        /*answer =answerEls.id;*/

             answer = answerEl.id;
        }
    });

    return answer;
}

function  deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked =false;
    });

}

submitBtn.addEventListener("click", ()=>{


    const answer = getSelected();

     // console.log(answer);

    if (answer){//checking if checked answer is same as the one in quiz data

        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++; //if we get answer then we move to next question

        //if current quiz is less than the data load quiz
        if (currentQuiz < quizData.length)
        {
            loadQuiz();
        }else
        {
            //TODO: Show RESULT
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2>`
        }

    }

})