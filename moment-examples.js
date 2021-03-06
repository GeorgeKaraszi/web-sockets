var moment = require("moment");
var now = moment();

console.log(now.format());
console.log(now.format("X"));
console.log(now.valueOf());


var timestamp = 1482694352781;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.format("h:mm a"));

console.log(timestampMoment.local().format("h:mm a"));

// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format("h:mm a"));

// console.log(now.format("MMMM Do YYYY, h:mm a"));