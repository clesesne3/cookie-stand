'use strict';

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
  resultsObj: {},
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
  createList: function() { // create list to display time and hourly cookie sales
    for(var j = 0; j < 16; j++) {
      var uListEl = document.getElementById('firstAndPike');
      var newLi = document.createElement('li');
      if (j < 6) {
        var newLiText = document.createTextNode(this.arrTime[j] + 'am: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j > 5 && j < 15) {
        var newLiText = document.createTextNode(this.arrTime[j] + 'pm: ' + this.arrCookies[j] + ' cookies');
      }
      else if (j == 15){
        var newLiText = document.createTextNode('Total: ' + this.totalCookies() + ' cookies');
      }
      newLi.appendChild(newLiText);
      uListEl.appendChild(newLi);
    }
  }
};

var seaTacAirport = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2
};

var seattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7
};

var capitolHill = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookies: 2.3
};

var alki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookies: 4.6
};

// call functions
firstAndPike.cookiesPerHour();
firstAndPike.createList();
