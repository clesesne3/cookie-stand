'use strict';

// firstAndPike object
var firstAndPike = {
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
    for(var j = 0; j < 16; j++) {
      var newList = document.getElementById('firstAndPike');
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
      newList.appendChild(newListEl);
    }
  }
};

// seaTacAirport object
var seaTacAirport = {
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
    for(var j = 0; j < 16; j++) {
      var newList = document.getElementById('seaTacAirport');
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
      newList.appendChild(newListEl);
    }
  }
};

var seattleCenter = {
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
    for(var j = 0; j < 16; j++) {
      var newList = document.getElementById('seattleCenter');
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
      newList.appendChild(newListEl);
    }
  }
};

var capitolHill = {
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
    for(var j = 0; j < 16; j++) {
      var newList = document.getElementById('capitolHill');
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
      newList.appendChild(newListEl);
    }
  }
};

var alki = {
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
    for(var j = 0; j < 16; j++) {
      var newList = document.getElementById('alki');
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
      newList.appendChild(newListEl);
    }
  }
};

// call functions to display store data for each location
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
