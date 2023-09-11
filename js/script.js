const boxesContainer = document.querySelector('.boxes');
let boxEl;

for (let i = 1; i <= 30; i++) {

  boxEl = document.createElement('div');
  boxEl.classList.add('box');
  boxEl.append(i);

  if (!(i % 15)) {

    boxEl.innerHTML = '';
    boxEl.append('FizzBuzz');
    boxEl.classList.add('fizzbuzz');
    
  } else if (!(i % 5)) {

    boxEl.innerHTML = '';
    boxEl.append('Buzz');
    boxEl.classList.add('buzz');

  } else if (!(i % 3)) {

    boxEl.innerHTML = '';
    boxEl.append('Fizz');
    boxEl.classList.add('fizz');

  }

  boxesContainer.append(boxEl);
}