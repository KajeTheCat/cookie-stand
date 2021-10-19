'use strict';

let globalTotal = 0;
let hours = ['', '6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m', 'Daily Location Total'];

let tr = document.getElementById('trow');
let tbody = document.getElementById('tbody');
let tfoot = document.getElementById('tfooter');

function renderTable() {
  for (let i = 0; i < hours.length; i++) {
    let thhours = document.createElement('th');
    thhours.textContent = hours[i];
    tr.appendChild(thhours);
  }
}
renderTable();
//constructor here
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSoldEachHourArray = [];
  //math below
  this.getRandomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.getCookieSalesPerHour = function () {
    let customersThisHour = this.getRandomCustomers();
    let totalCookiesSoldThisHour = Math.ceil(customersThisHour * this.avg);
    return totalCookiesSoldThisHour;
  };
  this.renderTbody = function () {
    let storeLocations = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = this.name;
    storeLocations.appendChild(td);
    tbody.appendChild(storeLocations);
    let sum = 0;
    for (let i = 0; i < hours.length - 2; i++) {
      let td = document.createElement('td');
      this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
      sum += this.cookiesSoldEachHourArray[i];
      td.textContent = this.cookiesSoldEachHourArray[i];
      storeLocations.appendChild(td);
    }
    let tdTotal = document.createElement('td');
    tdTotal.textContent = sum;
    globalTotal += sum;
    storeLocations.appendChild(tdTotal);
  };
}

function renderTFOOTER() {
  let total = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Total';
  total.appendChild(td);
  tfoot.appendChild(total);
  let totalPerHour = 0;
  for (let i = 0; i < hours.length - 2; i++) {
    totalPerHour = Seattle.cookiesSoldEachHourArray[i] + Tokyo.cookiesSoldEachHourArray[i] + Dubai.cookiesSoldEachHourArray[i] + Paris.cookiesSoldEachHourArray[i] + Lima.cookiesSoldEachHourArray[i];
    let tdElement2 = document.createElement('td');
    tdElement2.textContent = totalPerHour;
    total.appendChild(tdElement2);
  }
  let tdElement2 = document.createElement('td');
  tdElement2.textContent = globalTotal;
  total.appendChild(tdElement2);
}

//New stores here
let Seattle = new Store(
  'Seattle',
  23,
  65,
  6.3
);
let Tokyo = new Store(
  'Tokyo',
  3,
  24,
  1.2
);
let Dubai = new Store(
  'Dubai',
  11,
  38,
  3.7
);
let Paris = new Store(
  'Paris',
  20,
  38,
  2.3
);
let Lima = new Store(
  'Lima',
  2,
  16,
  4.6
);

//calling stores
Seattle.renderTbody();
Tokyo.renderTbody();
Dubai.renderTbody();
Paris.renderTbody();
Lima.renderTbody();
renderTFOOTER();
console.log(globalTotal);
