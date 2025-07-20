const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

let result = document.querySelector('.result')


btn1.addEventListener('click', () => {
  result.innerHTML = '1';
});

btn2.addEventListener('click', () => {
  result.innerText = '2';
});

btn3.addEventListener('click', () => {
  result.innerText = '3';
});

btn4.addEventListener('click', () => {
  result.innerText = '4';
});

btn5.addEventListener('click', () => {
  result.innerText = '5';
});

console.log(result.innerHTML);

const submit = document.querySelector('.submit');
const static = document.querySelector('.static');
const active = document.querySelector('.active');
const again = document.querySelector('.again')

submit.addEventListener('click', () => {
    static.style.display = 'none';
    active.style.display = 'flex';
  }
);

again.addEventListener('click', ()=>{
  static.style.display= 'flex';
  active.style.display = 'none';
})