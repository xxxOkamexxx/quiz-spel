// get students.js <---------doesn't work 😩 How do I get the other js-file? 
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
  for (let i = array.length -1; 1 >0; i--) {
    const j = Math.floor(Math.rancom() * (1 + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

shuffleArray(students);

