'use strict';

// this file includes object literals for each store location to generate and display data

// firstAndPike object
var firstAndPike = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookies: 6.3,
  arrTime: [],
  arrCookies: [],
  customerNum: function() { // generates a random number of customers per hour
    var avgCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    return avgCustomer;
  },
  cookiesPerHour: function() { // calculates number of cookies purchased per hour
    for(var i = 0; i < 15; i++) {
      var time = i + 6; // shifts iterating value to actual time value (24-hour format)3
      if (i + 6 > 12) { // adjusts time to 12-hr format
        time = time - 12;
      }
      this.arrTime.push(time); // creates array of store hours
      this.arrCookies.push(Math.round(this.customerNum() * this.avgCookies)); // creates array of hourly cookie sales
    }
    return this.arrCookies;
  },
  totalCookies: function() { // calculates total number of cookies per day
    var total = 0;
    for (var i = 0; i < this.arrCookies.length; i++) {
      total += this.arrCookies[i];
    }
    return total;
  },
  showData: function() { // generates list to display time and hourly cookie sales

    // DOM manipulation to dynamically create location sub-headers and unordered list elements
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    var ulEl = document.createElement('ul');
    ulEl.id = 'firstAndPike';
    document.body.appendChild(h3El);
    document.body.appendChild(ulEl);

    for(var j = 0; j < 16; j++) {
      var newListEl = document.createElement('li'); // create 'li' element to add to 'ul'
      // create text to insert into 'li' --> times and cookie sales for 6am to 11am
      if (j < 6) {
        var newListText = document.createTextNode(this.arrTime[j] + 'am: ' + this.arrCookies[j] + ' cookies');
      }
      // create text to insert into 'li' --> times and cookie sales for 12pm to 8pm
      else if (j > 5 && j < 15) {
        var newListText = document.createTextNode(this.arrTime[j] + 'pm: ' + this.arrCookies[j] + ' cookies');
      }
      // create text to insert into 'li' --> total number of cookies for day
      else if (j == 15){
        var newListText = document.createTextNode('Total: ' + this.totalCookies() + ' cookies');
      }
      newListEl.appendChild(newListText); // populate each list element time & sales text
      ulEl.appendChild(newListEl); // populate unordered list with list element
    }
  }
};

// seaTacAirport object
var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,
  arrTime: [],
  arrCookies: [],
  customerNum: function() { // generates a random number of customers per hour
    var avgCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    return avgCustomer;
  },
  cookiesPerHour: function() { // calculates number of cookies purchased per hour
    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if (i + 6 > 12) { // adjusts time to 12-hr basis
        time = time - 12;
      }
      this.arrTime.push(time);
      this.arrCookies.push(Math.round(this.customerNum() * this.avgCookies));
    }
    return this.arrCookies;
  },
  totalCookies: function() { // calculates total number of cookies for the day
    var total = 0;
    for (var i = 0; i < this.arrCookies.length; i++) {
      total += this.arrCookies[i];
    }
    return total;
  },
  showData: function() { // generates list to display time and hourly cookie sales

    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    var ulEl = document.createElement('ul');
    ulEl.id = 'seaTacAirport';
    document.body.appendChild(h3El);
    document.body.appendChild(ulEl);

    for(var j = 0; j < 16; j++) {
      var newListEl = document.createElement('li');
      if (j < 6) {
        var newListText = document.createTextNode(this.arrTime[j] + 'am: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j > 5 && j < 15) {
        var newListText = document.createTextNode(this.arrTime[j] + 'pm: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j == 15){
        var newListText = document.createTextNode('Total: ' + this.totalCookies() + ' cookies');
      }
      newListEl.appendChild(newListText);
      ulEl.appendChild(newListEl);
    }
  }
};

// seattleCenter object
var seattleCenter = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,
  arrTime: [],
  arrCookies: [],
  customerNum: function() { // generates a random number of customers per hour
    var avgCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    return avgCustomer;
  },
  cookiesPerHour: function() { // calculates number of cookies purchased per hour
    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if (i + 6 > 12) { // adjusts time to 12-hr basis
        time = time - 12;
      }
      this.arrTime.push(time);
      this.arrCookies.push(Math.round(this.customerNum() * this.avgCookies));
    }
    return this.arrCookies;
  },
  totalCookies: function() { // calculates total number of cookies for the day
    var total = 0;
    for (var i = 0; i < this.arrCookies.length; i++) {
      total += this.arrCookies[i];
    }
    return total;
  },
  showData: function() { // generates list to display time and hourly cookie sales

    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    var ulEl = document.createElement('ul');
    ulEl.id = 'seattleCenter';
    document.body.appendChild(h3El);
    document.body.appendChild(ulEl);

    for(var j = 0; j < 16; j++) {
      var newListEl = document.createElement('li');
      if (j < 6) {
        var newListText = document.createTextNode(this.arrTime[j] + 'am: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j > 5 && j < 15) {
        var newListText = document.createTextNode(this.arrTime[j] + 'pm: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j == 15){
        var newListText = document.createTextNode('Total: ' + this.totalCookies() + ' cookies');
      }
      newListEl.appendChild(newListText);
      ulEl.appendChild(newListEl);
    }
  }
};

// capitolHill object
var capitolHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3,
  arrTime: [],
  arrCookies: [],
  customerNum: function() { // generates a random number of customers per hour
    var avgCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    return avgCustomer;
  },
  cookiesPerHour: function() { // calculates number of cookies purchased per hour
    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if (i + 6 > 12) { // adjusts time to 12-hr basis
        time = time - 12;
      }
      this.arrTime.push(time);
      this.arrCookies.push(Math.round(this.customerNum() * this.avgCookies));
    }
    return this.arrCookies;
  },
  totalCookies: function() { // calculates total number of cookies for the day
    var total = 0;
    for (var i = 0; i < this.arrCookies.length; i++) {
      total += this.arrCookies[i];
    }
    return total;
  },
  showData: function() { // generates list to display time and hourly cookie sales

    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    var ulEl = document.createElement('ul');
    ulEl.id = 'capitolHill';
    document.body.appendChild(h3El);
    document.body.appendChild(ulEl);

    for(var j = 0; j < 16; j++) {
      var newListEl = document.createElement('li');
      if (j < 6) {
        var newListText = document.createTextNode(this.arrTime[j] + 'am: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j > 5 && j < 15) {
        var newListText = document.createTextNode(this.arrTime[j] + 'pm: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j == 15){
        var newListText = document.createTextNode('Total: ' + this.totalCookies() + ' cookies');
      }
      newListEl.appendChild(newListText);
      ulEl.appendChild(newListEl);
    }
  }
};

// alki object
var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6,
  arrTime: [],
  arrCookies: [],
  customerNum: function() { // generates a random number of customers per hour
    var avgCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    return avgCustomer;
  },
  cookiesPerHour: function() { // calculates number of cookies purchased per hour
    for(var i = 0; i < 15; i++) {
      var time = i + 6;
      if (i + 6 > 12) { // adjusts time to 12-hr basis
        time = time - 12;
      }
      this.arrTime.push(time);
      this.arrCookies.push(Math.round(this.customerNum() * this.avgCookies));
    }
    return this.arrCookies;
  },
  totalCookies: function() { // calculates total number of cookies for the day
    var total = 0;
    for (var i = 0; i < this.arrCookies.length; i++) {
      total += this.arrCookies[i];
    }
    return total;
  },
  showData: function() { // generates list to display time and hourly cookie sales

    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    var ulEl = document.createElement('ul');
    ulEl.id = 'alki';
    document.body.appendChild(h3El);
    document.body.appendChild(ulEl);

    for(var j = 0; j < 16; j++) {
      var newListEl = document.createElement('li');
      if (j < 6) {
        var newListText = document.createTextNode(this.arrTime[j] + 'am: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j > 5 && j < 15) {
        var newListText = document.createTextNode(this.arrTime[j] + 'pm: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j == 15){
        var newListText = document.createTextNode('Total: ' + this.totalCookies() + ' cookies');
      }
      newListEl.appendChild(newListText);
      ulEl.appendChild(newListEl);
    }
  }
};

// call function to display store data for each location

var displayAll = function() {
  firstAndPike.cookiesPerHour();
  firstAndPike.totalCookies();
  firstAndPike.showData();

  seaTacAirport.cookiesPerHour();
  seaTacAirport.totalCookies();
  seaTacAirport.showData();

  seattleCenter.cookiesPerHour();
  seattleCenter.totalCookies();
  seattleCenter.showData();

  capitolHill.cookiesPerHour();
  capitolHill.totalCookies();
  capitolHill.showData();

  alki.cookiesPerHour();
  alki.totalCookies();
  alki.showData();
};

displayAll();
