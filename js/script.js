const boxesContainer = document.querySelector('.boxes');
let boxEl;

console.log(boxEl)

for (let i = 1; i <= 30; i++) {
  console.log(i);
  boxEl = document.createElement('div');
  boxEl.classList.add('box');
  boxEl.append(i);

  if (i % 15 === 0) {

    boxEl.innerHTML = '';
    boxEl.append('FizzBuzz');
    
  } else if (i % 5 === 0) {

    boxEl.innerHTML = '';
    boxEl.append('Buzz');

  } else if ((i % 3 === 0)) {

    boxEl.innerHTML = '';
    boxEl.append('Fizz');

  }

  boxesContainer.append(boxEl);
}
// boxesContainer.append('boxEl');