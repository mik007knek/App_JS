"use strict";

var numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 3; i++){
    let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
        mark = prompt("На сколько вы его оцените?", ""),
        check = lastFilm.length < 50;
    while (!(check)||!(lastFilm)||!(mark)){
        lastFilm = 
        prompt("Ваш прошлый ответ неуместен!\nОтветьте еще раз\nОдин из последних просмотренных фильмов?", "");
        mark = prompt("Ваш прошлый ответ неуместен!\nОтветьте еще раз\nНа сколько вы его оцените?", "");
        check = (lastFilm.length < 50);
    }
    personalMovieDB.movies[lastFilm] = mark;
}

if (personalMovieDB.count < 10){
    alert("Вы смотрите мало фильмов");
} else if ((10 < personalMovieDB.count) && (personalMovieDB.count < 30)){
    alert("Вы классический зритель");
} else if (30 < personalMovieDB.count) {
    alert("Вы киноман!");
} else {
    alert("Ошибка");
}
console.log(personalMovieDB.count);

//console.log(personalMovieDB);