'use strict';

// this file will use a constructor function to generate and display store data in a table for all locations

var arrTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var tableEl = document.getElementById('cookiestands'); // create table element

// ***CONSTRUCTOR FUNCTION to build each location object***
function CreateLocation (name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.arrCookies = [];
  this.arrTossers = [];
  this.cookiesTotal = 0;
  allLocations.push(this);

  this.customerNum = function() { // method to generate random number of customers
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  };
  this.cookiesPerHour = function() { // method to calculate cookie sales per hour for respective location
    for(var i = 0; i < arrTime.length; i++) {
      this.arrCookies.push(Math.round(this.customerNum() * this.avgCookies));
    }
    return this.arrCookies;
  };
  this.totalCookies = function() { // method to calculate daily cookie total for respective location
    for (var i = 0; i < this.arrCookies.length; i++) {
      this.cookiesTotal += this.arrCookies[i];
    }
    return this.cookiesTotal;
  };
  this.makeTableRow = function() { // method to create complete data row (inherited by each location object)
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.name;
    trEl.appendChild(thEl);
    for (var i = 0; i < this.arrCookies.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.arrCookies[i];
      trEl.appendChild(tdEl);
    }
    var tdTotalEl = document.createElement('td');
    tdTotalEl.textContent = this.cookiesTotal;
    trEl.appendChild(tdTotalEl);
    tableEl.appendChild(trEl);
  };
  this.tossersPerHour = function() {// method to calculate tossers needed per hour for a location
    for (var i = 0; i < this.arrCookies.length; i++) {
      if (this.customerNum() / 20 >= 2) {
        this.arrTossers.push(Math.ceil(this.customerNum() / 20));
      }
      else {
        this.arrTossers.push(2);
      }
    }
    return this.arrTossers;
  };
  this.makeTosserRow = function() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = this.name;
    trEl.appendChild(thEl);
    for (var i = 0; i < this.arrCookies.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.arrTossers[i];
      trEl.appendChild(tdEl);
    }
    tableEl2.appendChild(trEl);
  };
}

//stores each location object as a variable
var firstAndPike = new CreateLocation('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new CreateLocation('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CreateLocation('Seattle Center', 11, 38, 3.7);
var capitolHill = new CreateLocation('Capitol Hill', 20, 38, 2.3);
var alki = new CreateLocation('Alki', 2, 16, 4.6);

// function to create header row
function makeHeaderRow(arrTime) {
  var trEl = document.createElement('tr');
  for (var i = 0; i <= arrTime.length; i++) {
    if (i === 0) {
      var thEl = document.createElement('th');
      thEl.textContent = '';
      trEl.appendChild(thEl);
    }
    else {
      var thEl = document.createElement('th');
      thEl.textContent = arrTime[i - 1];
      trEl.appendChild(thEl);
    }
  }
  var thTotalEl = document.createElement('th');
  thTotalEl.textContent = 'Daily Total';
  trEl.appendChild(thTotalEl);
  tableEl.appendChild(trEl);
}

// function to generate all 5 location data rows using inherited methods
function makeAllRows() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].customerNum();
    allLocations[i].cookiesPerHour();
    allLocations[i].totalCookies();
    allLocations[i].makeTableRow();
  }
}

// **STRETCH GOAL** - calculate hourly total for all five locations
function hourlyTotal (hour) {
  var total = 0;
  for (var i = 0; i < allLocations.length; i++) {
    total += allLocations[i].arrCookies[hour];
  }
  return total;
}

// **STRETCH GOAL** - display hourly totals for all locations
function makeFooterRow () {
  var trEl = document.createElement('tr');
  trEl.id = 'footer';
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  for (var i = 0; i < allLocations[0].arrCookies.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal(i);
    trEl.appendChild(tdEl);
  }
  var tdAllDailyTotal = document.createElement('td');
  var sum = 0;
  for (var j = 0; j < allLocations.length; j++) {
    sum += allLocations[j].cookiesTotal;
  }
  tdAllDailyTotal.textContent = sum;
  trEl.appendChild(tdAllDailyTotal);
  tableEl.appendChild(trEl);
}

makeHeaderRow(arrTime);
makeAllRows();
//makeFooterRow();

// **STRETCH GOAL** -- create table displaying cookie tossers needed per hour per location
/*var tableEl2 = document.getElementById('cookietosser');
function makeAllTosserRows () {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].customerNum();
    allLocations[i].tossersPerHour();
    allLocations[i].makeTosserRow();}
}

function makeTosserHeader (arrTime) {
  var trEl = document.createElement('tr');
  for (var i = 0; i <= arrTime.length; i++) {
    if (i === 0) {
      var thEl = document.createElement('th');
      thEl.textContent = '';
      trEl.appendChild(thEl);
    }
    else {
      var thEl = document.createElement('th');
      thEl.textContent = arrTime[i - 1];
      trEl.appendChild(thEl);
    }
  }
  tableEl2.appendChild(trEl);
}
makeTosserHeader(arrTime);
makeAllTosserRows();*/

//------------------------------------------------------------------------------
// This section will take input data from submitted form and add data row for new store location

// create variables to store form elements
var elForm = document.getElementById('storeForm');

// converts first letter of each word in a string to uppercase
function firstLetterCapital (word) {
  var wordArray = word.split(' ');
  var newWordArray = [];
  for (var i = 0; i < wordArray.length; i++) {
    newWordArray.push(wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1));
  }
  return newWordArray.join(' ');
}

// this function takes form input data and passes it into the constructor function
function submitFormData(event) {
  console.log(event);
  event.preventDefault(); // to prevent page reload

  // store values from user input on form; *use parseInt to convert numeric inputs to integers
  var storeName = firstLetterCapital(event.target.name.value); // capitalize store name
  var minCust = parseInt(event.target.minCustomer.value);
  var maxCust = parseInt(event.target.maxCustomer.value);
  var averageCookies = parseInt(event.target.avgCookies.value);

  // create new store location object from constructor
  var newStore = new CreateLocation(storeName, minCust, maxCust, averageCookies);

  // clear form entry values
  event.target.name.value = null;
  event.target.minCustomer.value = null;
  event.target.maxCustomer.value = null;
  event.target.avgCookies.value = null;

  // methods to create new data row
  allLocations[allLocations.length - 1].customerNum();
  allLocations[allLocations.length - 1].cookiesPerHour();
  allLocations[allLocations.length - 1].totalCookies();
  allLocations[allLocations.length - 1].makeTableRow();

  // checks to see if footer (hourly total) row is present; deletes and refreshes when new location created
  var footerPresent = document.getElementById('footer');
  if (footerPresent) {
    document.getElementById('cookiestands').deleteRow(allLocations.length);
  }
  makeFooterRow();
}

// event listener 'submit' fired to execute submitFormData function
elForm.addEventListener('submit', submitFormData);
