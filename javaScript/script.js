let elForm = document.querySelector(".site__form");
let elInput = document.querySelector(".input__distance");
let elButton = document.querySelector(".btn__hisobla");
let cardResultWalk = document.querySelector(".card__result-walking");
let cardResultBike = document.querySelector(".card__result-bike");
let cardResultCar = document.querySelector(".card__result-car");
let cardResultPlane = document.querySelector(".card__result-plane");

// WALKING
let walkSpeed = "3.6";
let walking = "Piyo";

const calculateTimeToGo = function(distance, speed) {
    if (distance > 0) {
        let timeSpend = distance / speed;
        let hour = Math.floor((distance / speed).toFixed(2));
        let minut = Math.round((parseFloat(timeSpend.toFixed(2), 10) - hour) * 60);
        let result = `${hour} soat, \n${minut} minut`;

        return result;
    } else {
        return;
    }
};

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    cardResultWalk.textContent = calculateTimeToGo(elInput.value, walkSpeed);
});

// BIKE

let bikeSpeed = "20.1";

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    cardResultBike.textContent = calculateTimeToGo(elInput.value, bikeSpeed);
});

// CAR

let carSpeed = "70";

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    cardResultCar.textContent = calculateTimeToGo(elInput.value, carSpeed);
});

// PLANE

let planeSpeed = "800";

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (elInput.value >= 200) {
        cardResultPlane.textContent = calculateTimeToGo(elInput.value, planeSpeed);
    } else {
        cardResultPlane.textContent = "Not available";
    }
});