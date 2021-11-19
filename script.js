// // get students.js <---- didn't need
// const getFriends = (callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener('readystatechange', () => { 
//      if(request.readyState === 4 && request.status === 200){
//        callback();
//      } else if(request.readyState === 4){
//        callback();
//      }
//   });
//   request.open("GET", "students.js");
//   request.send();
// };


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

/*
// output for test
console.log(students[1].name); // it's works!👍
*/

// insert foto in HTML
document.querySelector('#foto_container').innerHTML = `<img src=${students[0].image}>`; //show up a random picture of array[0]
/*
// output for test if image has collect students name
console.log(students[0].name); // it's works!👍
*/


// insert answer button (atudents name) in HTML
//shuffule a collect name and 3 more random names.
let answers = [];
for(i = 0; i < 4; i++ ){
  answers.push(students[i].name);  
}
// shuffle answers
shuffleArray(answers);  

let html = ``;
answers.forEach(answer =>{
  console.log(answer); // ok👍
  html +=  `<li class="btn btn-outline-secondary">${answer}</li>`
});
console.log(html)
document.querySelector('.answers').innerHTML = html;



