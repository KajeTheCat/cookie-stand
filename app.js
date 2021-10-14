'use strict';

const seattleStore = document.getElementById('seattleList');
const tokyoStore = document.getElementById('tokyoList');
const dubaiStore = document.getElementById('dubaiList');
const parisStore = document.getElementById('parisList');
const limaStore = document.getElementById('limaList');

let hours = ['6 a.m.', '7a.m.', '8 a.m.', '9am', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m', 'Total'];

let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return totalCookiesSoldThisHour;
  },

  renderTheList: function () {
    let sum = 0;
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      console.log(this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour()));
      sum += this.cookiesSoldEachHourArray[i];
      li.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]} cookies.`;
      seattleStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total sales ${sum}.`;
    seattleStore.appendChild(liTotal);
  },

  totalsumofcookies: function () {
    let totalSum = 0;
    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
      totalSum += this.cookiesSoldEachHourArray[i];
      return totalSum;
    }
  }

};
document.getElementById('seattleList').innerHTML = 'The Seattle Store';
seattle.renderTheList();

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return totalCookiesSoldThisHour;
  },

  renderTheList: function () {
    let sum = 0;
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      console.log(this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour()));
      sum += this.cookiesSoldEachHourArray[i];
      li.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]} cookies.`;
      tokyoStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total sales ${sum}.`;
    tokyoStore.appendChild(liTotal);
  },

  totalsumofcookies: function () {
    let totalSum = 0;
    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
      totalSum += this.cookiesSoldEachHourArray[i];
      return totalSum;
    }
  }

};
document.getElementById('tokyoList').innerHTML = 'The Tokyo Store';
tokyo.renderTheList();

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return totalCookiesSoldThisHour;
  },

  renderTheList: function () {
    let sum = 0;
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      console.log(this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour()));
      sum += this.cookiesSoldEachHourArray[i];
      li.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]} cookies.`;
      dubaiStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total sales ${sum}.`;
    dubaiStore.appendChild(liTotal);
  },

  totalsumofcookies: function () {
    let totalSum = 0;
    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
      totalSum += this.cookiesSoldEachHourArray[i];
      return totalSum;
    }
  }

};
document.getElementById('dubaiList').innerHTML = 'The Dubai Store';
dubai.renderTheList();

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return totalCookiesSoldThisHour;
  },

  renderTheList: function () {
    let sum = 0;
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      console.log(this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour()));
      sum += this.cookiesSoldEachHourArray[i];
      li.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]} cookies.`;
      parisStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total sales ${sum}.`;
    parisStore.appendChild(liTotal);
  },

  totalsumofcookies: function () {
    let totalSum = 0;
    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
      totalSum += this.cookiesSoldEachHourArray[i];
      return totalSum;
    }
  }

};
document.getElementById('parisList').innerHTML = 'The Paris Store';
paris.renderTheList();

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldEachHourArray: [],

  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  getCookieSalesPerHour: function () {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return totalCookiesSoldThisHour;
  },

  renderTheList: function () {
    let sum = 0;
    for (let i = 0; i < hours.length - 1; i++) {
      let li = document.createElement('li');
      console.log(this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour()));
      sum += this.cookiesSoldEachHourArray[i];
      li.textContent = `${hours[i]} ${this.cookiesSoldEachHourArray[i]} cookies.`;
      limaStore.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Total sales ${sum}.`;
    limaStore.appendChild(liTotal);
  },

  totalsumofcookies: function () {
    let totalSum = 0;
    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++) {
      totalSum += this.cookiesSoldEachHourArray[i];
      return totalSum;
    }
  }

};
document.getElementById('limaList').innerHTML = 'The Lima Store';
lima.renderTheList();
