"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Ліга справедливості",
            "Ла-ла ленд",
            "Одержимість",
            "Скотт Пілігрим проти..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          input = form.querySelector('.adding__input'),
          checkbox = form.querySelector('[type="checkbox"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = input.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 20) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            }
            
            if (favorite) {
                console.log('Добавляємо улюблений фільм');
            }
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);

        }
        event.target.reset(); //очищаємо форму
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';

        poster.style.backgroundImage = 'url("/img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class = "promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });

        });
    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);




});