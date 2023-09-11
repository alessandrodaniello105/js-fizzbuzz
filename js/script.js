const boxesContainer = document.querySelector('.boxes');
let boxEl;


boxesContainer.innerHTML += `
  <h1>Questo è il mio FizzBuzz</h1>
`;

for (let i = 1; i <= 100; i++) {

  boxEl = document.createElement('div');
  boxEl.classList.add('box');

  if ((i % 3 === 0) && (i % 5 === 0)) {

    boxEl.append('FizzBuzz');
    boxEl.classList.add('fizzbuzz');
    
  } else if (i % 5 === 0) {
    
    boxEl.append('Buzz');
    boxEl.classList.add('buzz');

  } else if (i % 3 === 0) {

    boxEl.append('Fizz');
    boxEl.classList.add('fizz');

  } else {

    boxEl.append(i);

  }

  boxesContainer.append(boxEl);
}
