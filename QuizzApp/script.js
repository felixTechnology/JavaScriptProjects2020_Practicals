/*An object in  array with key-value pair
* 2. Have box with the the questions in it (https://uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924)
* 2. when we select we store the selected as an id
* 3. And check if the ID is correct
*
* */

const quizData = [

    {
        question: 'How are is President Nana Akufo Addo..?',
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
    }




];

/*we need to load the questions from html and we will target them through below*/
const questionEl = document.getElementById("question");/*4*/
const a_text = document.getElementById("a_text");/*5*/
const b_text = document.getElementById("a_text");/*6*/
const c_text = document.getElementById("a_text");/*7*/
const  d_text = document.getElementById("a_text");/*8*/


/*We add the REACT JS*/

/*Keeping Track of current question*/
let currentQuiz = 0; //giving it zero index /*1*/

/*load quiz: The function will be called everything user submit*/
loadQuiz();/*2*/

function loadQuiz() {/*3*/
    const  currentQuizData = quizData[currentQuiz];

   questionEl.innerHTML = currentQuizData.question;

}