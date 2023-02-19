let imgEl = document.querySelector('.js-img');
let btnEl = document.querySelector('.formButton');

btnEl.addEventListener('click', () => {
    imgEl.setAttribute('src', `img/` + Math.ceil(Math.random() * 9)  + `.jpg`);
})
