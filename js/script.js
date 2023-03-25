"use strict";

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма" +

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let sortMovies = Object.assign(movieDB.movies);
sortMovies.sort();

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelectorAll('.promo__interactive-item'),
      ul = document.querySelector('.promo__interactive-list');
      

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("/img/bg.jpg")';


// movieList.forEach(item => {
//     item.innerHTML = "";
// });

movieList.forEach(function (item, i) {
    item.textContent = sortMovies[i];
});

// movieList.forEach(function (item, i) {
//     item.innerHTML = sortMovies[i];
// });
// sortMovies.forEach(function (item, i) {
//     const li = document.createElement('li');
//     li.classList.add('promo__interactive-item');
//     li.textContent = item;
//     const deleteBtn = document.createElement('div');
//     deleteBtn.classList.add('delete');
//     li.before(deleteBtn);
//     movieList[i].after(li);
// });

movieList.forEach(item => {
  const deleteBtn = document.createElement('div');
  deleteBtn.classList.add('delete');
  item.insertAdjacentElement('beforeend', deleteBtn);
});


for (let i = 0; i < movieList.length; i++) {
  movieList[i].innerHTML = (i+1) + '. ' + movieList[i].innerHTML;
}

const buttons = document.querySelectorAll('button');


const deleteElement = (event) =>  {
  console.log(event.target);
  event.target.remove();
  // console.log('You push on me!');
};

buttons.forEach(button => {
  button.addEventListener('click', deleteElement);
});
