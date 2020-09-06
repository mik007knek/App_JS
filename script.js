"use strict";

var numberOfFilms = +prompt("Сколько фильмов вы уже посмотррели?", "");


var personalMovieDB = {
    count: numberOfFilms,
    movies: null,
    actors: null,
    genres: [],
    privat: false
};

var lastFilm = prompt("Один из последних просмотренных фильмов?", "");
var mark = prompt("На сколько вы его оцените?", "");

personalMovieDB.movies[lastFilm] = mark;