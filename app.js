'use strict';

var divEl = document.getElementById('imgs');
var imgEl1 = document.getElementById('img1');
var imgEl2 = document.getElementById('img2');
var imgEl3 = document.getElementById('img3');

var products = [];

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.numTimeShown = 0;
  this.numTimeClick = 0;
  products.push(this);
}

new Product('R2D2 Luggage', 'img/bag.jpg');
new Product('Banna Cutter', 'img/banana.jpg');
new Product('Ipad Stand', 'img/bathroom.jpg');
new Product('Toeless Boots', 'img/boots.jpg');
new Product('Breakfast Genie', 'img/breakfast.jpg');
new Product('Meatball Bubble Gum', 'img/bubblegum.jpg');
new Product('Bump Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Duck Bill Dog Mouthpiece', 'img/dog-duck.jpg');
new Product('Dragon Meat', 'img/dragon.jpg');
new Product('Pen Utensils', 'img/pen.jpg');
new Product('Pet Sweep', 'img/pet-sweep.jpg');
new Product('Pizza Scissors', 'img/scissors.jpg');
new Product('Shark Sleeping Bag', 'img/shark.jpg');
new Product('Baby Sweep', 'img/sweep.jpg');
new Product('Tauntaun Sleeping Bag', 'img/tauntaun.jpg');
new Product('Unicorn Meat', 'img/unicorn.jpg');
new Product('Tentacle USB', 'img/usb.jpg');
new Product('Water Can', 'img/water-can.jpg');
new Product('Win Glass', 'img/wine-glass.jpg');

var randomNums = [];
var numOfClicks = 0;

function randomNum() {
  return Math.floor(Math.random() * (19 + 1));
}
function pushRandNums() {
  randomNums.push(randomNum());
  randomNums.push(randomNum());
  randomNums.push(randomNum());
}
pushRandNums();
noDup();

var oldImgNum = randomNums;

function render() {
  imgEl1.setAttribute('src', products[randomNums[0]].path);
  imgEl2.setAttribute('src', products[randomNums[1]].path);
  imgEl3.setAttribute('src', products[randomNums[2]].path);
}
render();

function noDup() {
  console.log(randomNums, 'beggining of no dup');
  while (randomNums[0] === randomNums[1]) {
    if (randomNums.indexOf(randomNums[0]) === 0) {
      console.log(randomNums, 'Duplicate between first and second numbers caught and fixed');
      randomNums[1] = randomNum();
    }
  }
  while (randomNums[0] === randomNums[2]) {
    console.log(randomNums, 'Duplicate between first and third numbers caught and fixed');
    randomNums[2] = randomNum();
  }
  while (randomNums[1] === randomNums[2]) {
    console.log(randomNums, 'Duplicate between third and second numbers caught and fixed');
    randomNums[2] = randomNum();
  }
  console.log(randomNums, 'end of no dup');
}

function checkImg() {
  ++numOfClicks;
  var clickedItem = event.target.id;
  console.log('Clicked on ' + clickedItem);
  randomNums = [];
  pushRandNums();
  noDup();
  render();
}

function clickHandler(event) {
  console.log('called event');
  if (event.target !== event.currentTarget) {
    if (numOfClicks === 25) {
      console.log('25 clicks');
      numOfClicks = 0;
      divEl.removeEventListener('click', clickHandler);
    } else {
      checkImg();
    }
  } else {
    console.log('Clicked On Div');
  }
  event.stopPropagation();
}

divEl.addEventListener('click', clickHandler);
