const scoreEl = document.querySelector('#score');
const imagEl = document.querySelector('#foto_container');
const answerButtonsEl = document.querySelector('.answers');
const nextButtonEl = document.querySelector('#nextButton');
const quitButtonEl = document.querySelector('#quit-game-button');
const checkbuttonsEl = document.querySelectorAll('.checkAnswer');

// function for shuffle array
const shuffleArray = ((array) => {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
});



// // insert and count points
const uppdateScore = () => {
  scoreEl.innerHTML = `You are correct for <strong>${correct}</strong> of ${questions} questions!`;
};


let correct;
let questions;


// start new Game　　
const startNewGame = (() => {
  // get random students info
  getQuestions();
  
  // reset number of correct answer to 0
  correct = 0;

  // reset number of questions
  questions = 0;

  console.log('correct answer in startneewGame:', correctAnswer); 
});


let correctAnswer;

//  get questions
const getQuestions = () => {
  // shuffle students list in students.js 
  //console.log('before');
  shuffleArray(students); 
  // output for test
  //console.log(students[1].name); // it's works!👍

  // insert foto in HTML 
  imagEl.innerHTML = `<img class="col-12" src=${students[0].image}>`; //show up a random picture of array[0] 

  correctAnswer = students[0].name;
  // output for test if image has correct students name
  console.log('correct answer:', correctAnswer); // it's works!👍 <-------- *

  // insert answer button (atudents name) in HTML
  //shuffule a correct name and 3 more random names.
  let answers = [];
  for(i = 0; i < 4; i++ ){
    answers.push(students[i].name); 
    console.log('loop',[i]); // check in answers array
  }

  console.log('answers', answers);
  // shuffle answer buttons
  shuffleArray(answers);   // <-------- *

  let html = ``;

  answers.forEach(answer =>{
    //console.log(answer); // ok👍
    html +=  `<li class="btn btn-outline-secondary col-md-5">${answer}</li>`
  });
  //console.log(html)
  answerButtonsEl.innerHTML = html;  // <------- *

};


// add click answer-button event
answerButtonsEl.addEventListener('click', e=> {
  //output for controll 'click'
  
  console.log(`clicked tagName, e.taget: ${e.target.tagName}`,e.target);
  
  //e.preventDefault(); // <------ ? need it?
  console.log('correct answer in addEventListener:', correctAnswer);
   
  // count questions
  questions ++;
  // check if answer is correct
  console.log({'e.target': e.target.textContent, correctAnswer});
  if(e.target.textContent === correctAnswer){
    // count correct answer
    correct ++;

    console.log("Correct! 🥳");

    e.target.classList.remove('btn-outline-secondary');
    e.target.classList.add('btn-success');

  } else {
    console.log(" Wrong😩 "); // <---------　ここまで

    e.target.classList.remove('btn-outline-secondary');
    e.target.classList.add('btn-danger');
  }
  // クリック後、正解を表示する（正解ボタン=緑、不正解ボタン=赤）

  uppdateScore(correct, questions);
});



nextButtonEl.addEventListener('click', e=> {
  //output for controll 'click'
  console.log(`clicked ${e.target.tagName}`,e.target);
  getQuestions();
});


quitButtonEl.addEventListener('reset', e => {
  //output for controll 'click'
  console.log(`reset ${e.target.tagName}`,e.target);
  // start new game
  startNewGame();

  // emptiy previous result
  correct = 0;
  questions = 0;
  uppdateScore(correct,questions); 

});
startNewGame();
// use 'filter' and 'map' to check correct/ wrong answer.
// insert cheat-button
