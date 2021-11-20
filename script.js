const scoreEl = document.querySelector('#score');
const imagEl = document.querySelector('#foto_container');
const answerButtonsEl = document.querySelector('.answers');


// function for shuffle array
const shuffleArray = (array) => {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
// shuffle students list in students.js
shuffleArray(students); 
// output for test
//console.log(students[1].name); // it's works!👍


// insert and count points
const uppdateScore = (correct) => {
  scoreEl.innerHTML = `You are correct for <strong>${correct}</strong> of 10 questions!`;
};



// start new Game
const startNewGame = () => {
  //
  correctAnswer = 

  // reset score
  correct = 0;
}
uppdateScore();

// insert foto in HTML           <-------------------------
imagEl.innerHTML = `<img class="col-12" src=${students[0].image}>`; //show up a random picture of array[0] 
let correctAnswer = students[0].name
// output for test if image has correct students name
//console.log(students[0].name); // it's works!👍


// insert answer button (atudents name) in HTML
//shuffule a correct name and 3 more random names.
let answers = [];
for(i = 0; i < 4; i++ ){
  answers.push(students[i].name);  
}
// shuffle answer buttons
shuffleArray(answers);  

let html = ``;
answers.forEach(answer =>{
  console.log(answer); // ok👍
  html +=  `<li class="btn btn-outline-secondary col-md-5">${answer}</li>`
});
console.log(html)
answerButtonsEl.innerHTML = html; //<----------------


// add click answer-button event
answerButtonsEl.addEventListener('click', e=> {
  //output for controll 'click'
  //console.log(`clicked ${e.target.tagName}`,e.target);
  
  //if answer is correct
  if(e.target.textContent === correctAnswer){
    console.log("Correct! 🥳");

  } else {
    console.log(" 😩 ");
  }

});
// use 'filter' and 'map' to check correct/ wrong answer.





// insert cheat-button
