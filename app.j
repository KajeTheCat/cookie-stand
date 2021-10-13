'use strict'

console.log('hi')

const seattleStore = document.getElementById('seattleList');

let hours = ['6 a.m.', '7a.m.', '8 a.m.', '9am', '10 a.m.', '11 a.m.', '12 p.m.','1 p.m','2 p.m.','3 p.m.','4 p.m.','5 p.m.','6 p.m.','7 p.m', 'Total'];

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesSoldEachHourArray: [],
    getRandomCustomers: function() {
        return Math.floor(Math.random * (this.max - this.min + 1) + this.min);
    },
    getCookieSalesPerHour: function() {
        
    }
}
