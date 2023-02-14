let now = new Date();

let elDay = document.querySelector('.day').innerHTML = now.getDate()+ '/';
let elMonth = document.querySelector('.month');

elMonth.innerHTML =(now.getMonth() + 1) < 10 ? '0' + (now.getMonth() + 1) + '/': (now.getMonth() + 1) + '/';

let elYear = document.querySelector('.year').innerHTML = now.getFullYear();
  ///////////////////////////////// 

let elHour = document.querySelector('.hours');
let elMinute = document.querySelector('.minutes');
let elSecond = document.querySelector('.seconds'); 

function clock(params){
    let now = new Date();


elHour.innerHTML = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
elMinute.innerHTML = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
elSecond.innerHTML = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
}
clock();

setInterval(function () {
    clock();
} ,1000);