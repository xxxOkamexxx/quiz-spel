// get students.js
const getFriends = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => { 
     if(request.readyState === 4 && request.status === 200){
       callback();
     } else if(request.readyState === 4){
       callback();
     }
  });
  request.open("GET", "students.js");
  request.send();
};


// shuffle students
const shuffleArray = (array) => {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffleArray(students); 

/*
// output for test
console.log(students[1].name); // it's works!👍
*/

// insert foto in HTML
document.querySelector('#foto_container').innerHTML = `<img src=${students[0].image} >`;

