const questionDiv = document.querySelector('#question');
const answerDiv = document.querySelector("#answer");
const feedbackDiv = document.querySelector('#feedback');
const newQuestionButton = document.querySelector('#questionBtn');
const submitButton = document.querySelector('#answerBtn');
const playerOnebtn = document.querySelector('#player1');
const playerTwobtn = document.querySelector('#player2');
let currentQuestion = null;
let currentPlayer = null;
let scorePlayer1 = 0;
let scorePlayer2 = 0;

playerOnebtn.addEventListener('click', ()=>{
    currentPlayer = 1;
    alert('Player 1 start!')
})

playerTwobtn.addEventListener('click', ()=>{
    currentPlayer = 2;
    alert('Player 2 start!')
})

function getTriviaQuestion(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const index = Math.floor(Math.random()*questions.length);
            const question = questions[index];
            resolve(question);
            if(index > questions.length){
                reject('An error occured while fetching the trivia question');
            }
            else{
                resolve(question);
            }
        },1000)
    });
}

function displayQuestion(triviaQuestion){
    questionDiv.textContent = triviaQuestion.question;
    answerDiv.value = "";
    feedbackDiv.textContent = "";
}


newQuestionButton.addEventListener('click',()=> {
    getTriviaQuestion()
    .then((question)=>{
        currentQuestion = question;
        displayQuestion(question);
    })
    .catch((error) =>{
        console.error(error);
    })

})

submitButton.addEventListener('click',()=>{
    let userInput = answerDiv.value.trim().toLowerCase();
    console.log(userInput);
    console.log(currentQuestion);
    console.log(currentQuestion.question);
    console.log(currentQuestion.answer)
    if(currentQuestion && userInput === currentQuestion.answer.toLowerCase()){
        feedbackDiv.textContent = "Correct answer";
        feedbackDiv.style.color = 'green' 
        if(currentPlayer == 1){
            scorePlayer1 += 1;
            alert(`Player 1's score is ${scorePlayer1}`)
        }
        if(currentPlayer == 2){ 
            scorePlayer2 += 1;
            alert(`player 2's score is ${scorePlayer2}`)
        }
        
    }
    else{
        feedbackDiv.textContent = "try again"
        feedbackDiv.style.color = "red"
    }
})




