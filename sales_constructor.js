'use strict';

// this file will use a constructor function to generate and display store data in a table for all locations

var arrTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];

var dailyCookieTotal = 0; //total cookies per day for each location

// construtor function to build each location object
function CreateLocation (name, minCustomer, maxCustomer, avgCookies) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.randCustomer = [];
  this.arrCookies = [];
  this.cookiesTotal = 0;
  allLocations.push(this);

  this.customerNum = function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  };
  this.cookiesPerHour = function() {
    for(var i = 0; i < arrTime.length; i++) {
      this.arrCookies.push(Math.round(this.customerNum() * this.avgCookies));
    }
    return this.arrCookies;
  };
  this.totalCookies = function() {
    for (var i = 0; i < this.arrCookies.length; i++) {
      this.cookiesTotal += this.arrCookies[i];
    }
    return this.cookiesTotal;
  };
}

function createAllStands() {
  new CreateLocation('1st and Pike', 23, 65, 6.3);
  new CreateLocation('SeaTac Airport', 3, 24, 1.2);
  new CreateLocation('Seattle Center', 11, 38, 3.7);
  new CreateLocation('Capitol Hill', 20, 38, 2.3);
  new CreateLocation('Alki', 2, 16, 4.6);
}
createAllStands();

var tableEl = document.getElementById('cookiestands');

function makeHeaderRow(inputArray) { // this should access array of time values
  var trEl = document.createElement('tr');
  for (var i = 0; i <= inputArray.length; i++) {
    if (i === 0) {
      var thEl = document.createElement('th');
      thEl.textContent = '';
      trEl.appendChild(thEl);
    }
    else {
      var thEl = document.createElement('th');
      thEl.textContent = inputArray[i - 1];
      trEl.appendChild(thEl);
    }
  }
  var thTotalEl = document.createElement('th');
  thTotalEl.textContent = 'Daily Location Total';
  trEl.appendChild(thTotalEl);
  tableEl.appendChild(trEl);
}

function makeTableRow (inputArray) { // this should access array of cookie sales per hour for each location
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = allLocations[0].name;
  trEl.appendChild(thEl);
  for (var j = 0; j < inputArray.length; j++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = inputArray[j];
    trEl.appendChild(tdEl);
  }
  var tdTotalEl = document.createElement('td');
  tdTotalEl.textContent = allLocations[0].totalCookies();
  trEl.appendChild(tdTotalEl);
  tableEl.appendChild(trEl);
}

makeHeaderRow(arrTime);

for (var k = 0; k < allLocations.length; k++) {
  makeTableRow(allLocations[k].cookiesPerHour());
}
