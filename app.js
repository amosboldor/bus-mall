'use strict';

var divEl = document.getElementById('imgs');
var imgEl1 = document.getElementById('img1');
var imgEl2 = document.getElementById('img2');
var imgEl3 = document.getElementById('img3');

var chart = document.getElementById('draw-chart');
chart.style.display = 'none';
var list = document.getElementById('draw-list');
list.style.display = 'none';

var products = [];
var productsName = [];
var votes = [];

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

function render() {
  imgEl1.setAttribute('src', products[randomNums[0]].path);
  imgEl2.setAttribute('src', products[randomNums[1]].path);
  imgEl3.setAttribute('src', products[randomNums[2]].path);
}

function noDup() {
  console.log(randomNums, 'beggining of no dup');
  randomNums.push(randomNum());

  while(randomNums[0] === oldImgNum[0] || randomNums[0] === oldImgNum[1] || randomNums[0] === oldImgNum[2]) {
    console.log(randomNums, 'Duplicate with first num, fixed');
    randomNums[0] = randomNum();
  }

  randomNums.push(randomNum());

  while (randomNums[1] === randomNums[0] || randomNums[1] === oldImgNum[0] || randomNums[1] === oldImgNum[1] || randomNums[1] === oldImgNum[2]) {
    console.log(randomNums, 'Duplicate with second number, fixed');
    randomNums[1] = randomNum();
  }
  randomNums.push(randomNum());

  while (randomNums[2] === randomNums[0] || randomNums[2] === randomNums[1] || randomNums[2] === oldImgNum[0] || randomNums[2] === oldImgNum[1] || randomNums[2] === oldImgNum[2]) {
    console.log(randomNums, 'Duplicate with third number, fixed');
    randomNums[2] = randomNum();
  }

  console.log(randomNums, 'end of no dup');
}

function checkImg() {
  ++numOfClicks;
  console.log(event.srcElement.attributes[1].nodeValue);
  var hit = event.srcElement.attributes[1].nodeValue;
  for (var i = 0; i < products.length; i++) {
    if (products[i].path === hit) {
      products[i].numTimeClick++;
    }
  }
  var clickedItem = event.target.id;
  console.log('Clicked on ' + clickedItem);
  oldImgNum = randomNums;
  randomNums = [];
  noDup();
  render();
}

function displayList() {
  var ulEl = document.createElement('ul');
  for (var i = 0; i < products.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = products[i].numTimeClick + ' votes for the ' + products[i].name;
    ulEl.appendChild(liEl);
  }
  document.body.appendChild(ulEl);
}

var oldImgNum = [];
noDup();
render();

function updateChartArrays() {
  for (var i = 0; i < products.length; i++) {
    productsName[i] = products[i].name;
    votes[i] = products[i].numTimeClick;
  }
}

function clickHandler(event) {
  console.log('called event');
  if (event.target !== event.currentTarget) {
    if (numOfClicks === 25) {
      console.log('25 clicks');
      numOfClicks = 0;
      updateChartArrays();
      divEl.removeEventListener('click', clickHandler);
      chart.style.display = 'block';
      list.style.display = 'block';
    } else {
      checkImg();
    }
  } else {
    console.log('Clicked On Div');
  }
  event.stopPropagation();
}

// ++++++++++++++++++++++++++++++++++++++++++++
// CHART Data + Dunction to Draw Chart
// ++++++++++++++++++++++++++++++++++++++++++++

var data = {
  labels: productsName,
  datasets: [{
    label: '# of Votes',
    data: votes,
    backgroundColor: [
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(255, 206, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(255, 159, 64, 0.7)'
    ],
    borderColor: [
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)',
      'rgba(0,0,0,1)'
    ],
    borderWidth: 1
  }]
};

function drawChart() {
  var ctx = document.getElementById('productChart');
  var productChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            stepSize: 1
          }
        }]
      }
    }
  });
}

// ++++++++++++++++++++++++++++++++++++++++++++
// EVENT LISTENERS
// ++++++++++++++++++++++++++++++++++++++++++++

chart.addEventListener('click', function(){
  drawChart();
  chart.style.display = 'none';
});

list.addEventListener('click', function(){
  displayList();
  list.style.display = 'none';
});

divEl.addEventListener('click', clickHandler);
