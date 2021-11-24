const scoreEl = document.querySelector('#score');
const imagEl = document.querySelector('#foto_container');
const answerButtonsEl = document.querySelector('.answers');
const cheatButtonEl = document.querySelector('#cheat-button');
const nextButtonEl = document.querySelector('#nextButton');
const quitButtonEl = document.querySelector('#quit-game-button');
const cheatEl = document.querySelector('#cheat');

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
  
  // reset cheat
  cheatEl.innerHTML=``;

  uppdateScore();
  console.log('correct answer in startneewGame:', correctAnswer); 
  answerButtonsEl.classList.remove('disabled'); 

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
  console.log('correct answer:', correctAnswer); // it's works!👍 

  // insert answer button (atudents name) in HTML
  //shuffule a correct name and 3 more random names.
  let answers = [];
  for(i = 0; i < 4; i++ ){
    answers.push(students[i].name); 
    console.log('loop',[i]); // check in answers array
  }

  console.log('answers', answers);
  // shuffle answer buttons
  shuffleArray(answers);

  let html = ``;

  answers.forEach(answer =>{
    //console.log(answer); // ok👍
    html +=  `<li class="btn btn-outline-secondary col-md-5">${answer}</li>`
  });
  //console.log(html)
  answerButtonsEl.innerHTML = html;  // <------- * new

};

// add click answer-button event
answerButtonsEl.addEventListener('click', e=> {  
  
  //Check if clicked on a LI element
  if(e.target.tagName === 'LI'){
    
    const checkbuttonsEl = true;


    //output for controll 'click'
    console.log(`clicked tagName , e.taget: ${e.target.tagName}`,e.target);
    
    console.log('correct answer in addEventListener:', correctAnswer);
      
    // count questions
    questions ++;
    
    // check if answer is correct
    console.log({'e.target': e.target.textContent, correctAnswer});

    if(e.target.textContent === correctAnswer){
      // count correct answer
      correct ++;
      console.log("Correct! 🥳");
      // change button color if answer is correct
      e.target.classList.remove('btn-outline-secondary');
      e.target.classList.add('btn-success');
    } else {
      console.log(" Wrong😩 "); 
      cheatEl.innerHTML=`${correctAnswer}`;
      // change button color if answer is wrong
      e.target.classList.remove('btn-outline-secondary');
      e.target.classList.add('btn-danger');
    }

    console.log(typeof checkbuttonsEl);
    console.log(checkbuttonsEl);
      //  stopp to press any other selection button after clicking it.      
      if(checkbuttonsEl === true){
        //console.log('clicked'); // ok
        answerButtonsEl.classList.add('disabled');     
      }else{
        answerButtonsEl.classList.remove('disabled');  
      }

  }
  
  uppdateScore(correct, questions);
  
});


// forward to next answer
nextButtonEl.addEventListener('click', e=> {
  //output for controll 'click'
  answerButtonsEl.classList.remove('disabled');  
  console.log(`clicked ${e.target.tagName}`,e.target);
  getQuestions();

  // reset cheat
  cheatEl.innerHTML=``;
});


// quit Game
quitButtonEl.addEventListener('click', e => {
  
  // calculate the highest point
  const point = Math.round(correct / questions * 100) + '%';
  
  // #answers-container invisible
  document.querySelector('#answers-container').classList.add('invisible')

  imagEl.innerHTML = `<h2 class="text-center">YOUR SCORE IS ${point}!</h2><button type="button" id="start-game-button" class="btn btn-secondary col-5 ">NEW GAME</button>`;

  document.querySelector('#start-game-button').addEventListener('click', e => {
    // #answers-container visible
    document.querySelector('#answers-container').classList.remove('invisible');
    startNewGame();
  });
  //console.log(answerButtonsEl);
});
startNewGame();


// insert cheat-button
cheatButtonEl.addEventListener('click', e => {
  cheatEl.innerHTML=`${correctAnswer}`;
});

// use 'filter' and 'map' to check correct/ wrong answer？

