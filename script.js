"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        let numberOfFilms;
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (numberOfFilms == '' || numberOfFilms == null || typeof(numberOfFilms) != typeof(123)){
            numberOfFilms = 
            +prompt("Ваш прошлый ответ неуместен!"+
            "\nОтветьте еще раз, пожалуйста!\nСколько фильмов вы уже посмотрели?", "");
        }
        this.count = numberOfFilms;
    },
    rememberFilms: function(){
        for (let i = 0; i < 3; i++){
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
            this.movies[lastFilm] = mark;
        }
    },
    isKinoman: function(count){
        if (count < 10){
            alert("Вы смотрите мало фильмов");
        } else if ((10 < count) && (count < 30)){
            alert("Вы классический зритель");
        } else if (30 < count) {
            alert("Вы киноман!");
        } else {
            alert("Ошибка");
        }
    },
    showMyDB: function(privat){
        if (!privat){
            console.log(this);
        }
    },
    writeYourGeneres: function(){
        for (let i = 0; i < 3; i++){
            this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        }
        this.genres.forEach(function(item, i){
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberFilms();
personalMovieDB.isKinoman(personalMovieDB.count);
personalMovieDB.writeYourGeneres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
//console.log(personalMovieDB.count);

//console.log(personalMovieDB);