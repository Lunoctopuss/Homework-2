// TASK 1

let currentDate;
let dateDob;
let dateUtc;
let day;

currentDate = new Date();
currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());

dateDob = new Date();
dateDob.setFullYear(1995);
dateDob.setMonth(2);
dateDob.setDate(9);
dateDob.setHours(4);
dateDob.setMinutes(0);
dateDob.setSeconds(0);

// dateUtc = ( date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

let inputDate0 = alert(`Current date is ${currentDate}`)

let inputDate1 = alert(`My date of birth is ${dateDob}`);

let inputDate2 = alert(`I was born on the ${dateDob.getDate()}th.`)

let inputDate3 = alert(`Current date converted to UTC is ${new Date().toISOString()} and my DOB converted to UTC is ${new Date(dateDob).toISOString()}.`)


// TASK 2

