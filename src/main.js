import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dog } from './js/dog';


let dogPic = new Dog();
let promise = dogPic.getBreedList();

promise.then(function(response) {
    let body = JSON.parse(response);
    let list = body.message;
    const selectForm = $("#breedList");
    console.log(selectForm);
    console.log(list);
    for(let breed in list){
        selectForm.append(`<option value = "${breed}">${breed}</option>`);
    }
});


$(document).ready(function () {
    $("#randomDog").submit(function(event) {
        event.preventDefault();
        let dogPic = new Dog();
        let promise = dogPic.getRandomDogPic();

        promise.then(function(response) {
            let body = JSON.parse(response);
            let img = new Image();
            img.src = body.message;
            document.getElementById("dogImgOutput").src = img.src;
        })
    });
    $("#randomBreed").submit(function(event) {
        event.preventDefault();
        let breed = $("#breedList").val();
        let dogPic = new Dog();
        let promise = dogPic.getRandomBreedPic(breed);

        promise.then(function(response) {
            let body = JSON.parse(response);
            let img = new Image();
            img.src = body.message;
            document.getElementById("dogImgOutput").src = img.src;
        })
    });

    $("#randomCat").submit(function(event) {
        event.preventDefault();
        let catPic = new Dog();
        let promise = catPic.getRandomCatPic();

        promise.then(function(response) {
            let body = JSON.parse(response);
            let img = new Image();
            img.src = body.file;
            document.getElementById("dogImgOutput").src = img.src;
        })
    });

    $("#randomDogGiphy").submit(function(event) {
        event.preventDefault();
        let dogGiphy = new Dog();
        let promise = dogGiphy.getRandomDogGif();

        promise.then(function(response) {
            let body = JSON.parse(response);
            let img = new Image();
            img.src = body.data.images.original.url;
            document.getElementById("dogImgOutput").src = img.src;
        })
    });

    $("#randomCatGiphy").submit(function(event) {
        event.preventDefault();
        let catGiphy = new Dog();
        let promise = catGiphy.getRandomCatGif();

        promise.then(function(response) {
            let body = JSON.parse(response);
            let img = new Image();
            img.src = body.data.images.original.url;
            document.getElementById("dogImgOutput").src = img.src;
        })
    });
});

