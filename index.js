var hourHand = document.querySelector(".hours");
var minuteHand = document.querySelector(".minutes");
var secondHand = document.querySelector(".seconds");

var date = new Date();

var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();

var secondHandDegree = 6*second;
var minuteHandDegree = 6*minute;
var hourHandDegree = 30*hour + minute/2;

// var secondHandDegree = 6*second;
// var minuteHandDegree = 6*minute + ((6/60)*second);
// var hourHandDegree = 30*hour + ((30/60)*minute + (((30/60)/60)*second));

setInterval(() => {
    
    secondHandDegree += (6/100);
    minuteHandDegree += (6/100/60);
    hourHandDegree += (6/100/60/12);

    secondHand.style.transform = `rotate(${secondHandDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandDegree}deg)`;
    hourHand.style.transform = `rotate(${hourHandDegree}deg)`;

},10);

window.addEventListener("focus", function () {
    window.location.reload();
  });