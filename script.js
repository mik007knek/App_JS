"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || typeof(numberOfFilms) != typeof(123)){
        numberOfFilms = 
        +prompt("Ваш прошлый ответ неуместен!\nОтветьте еще раз, пожалуйста!\nСколько фильмов вы уже посмотрели?", "");
    }
    personalMovieDB.count = numberOfFilms;
}

function rememberFilms(){
    for (let i = 0; i < 2; i++){
        let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
            mark = prompt("На сколько вы его оцените?", ""),
            check = lastFilm.length < 50;
        while (!(check)||!(lastFilm)||!(mark)){
            lastFilm = 
            prompt("Ваш прошлый ответ неуместен!\nОтветьте еще раз, пожалуйста!\n" + 
            "Один из последних просмотренных фильмов?", "");
            mark = prompt("Ваш прошлый ответ неуместен!\nОтветьте еще раз, пожалуйста!" + 
            "\nНа сколько вы его оцените?", "");
            check = (lastFilm.length < 50);
        }
        personalMovieDB.movies[lastFilm] = mark;
    }
}

function isKinoman(count){
    if (count < 10){
        alert("Вы смотрите мало фильмов");
    } else if ((10 < count) && (count < 30)){
        alert("Вы классический зритель");
    } else if (30 < count) {
        alert("Вы киноман!");
    } else {
        alert("Ошибка");
    }
}

function showMyDB(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGeneres(){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
    }
}


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
start();
rememberFilms();
isKinoman(personalMovieDB.count);
writeYourGeneres();
showMyDB();
//console.log(personalMovieDB.count);

//console.log(personalMovieDB);