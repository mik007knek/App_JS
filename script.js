"use strict";

var numberOfFilms = +prompt("Сколько фильмов вы уже посмотррели?", "");


var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
let mark = prompt("На сколько вы его оцените?", "");

personalMovieDB.movies[lastFilm] = mark;

lastFilm = prompt("Один из последних просмотренных фильмов?", "");
mark = prompt("На сколько вы его оцените?", "");

personalMovieDB.movies[lastFilm] = mark;

console.log(personalMovieDB);