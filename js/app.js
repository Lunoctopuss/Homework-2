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

const colorBlue = ['blue'];

initialPrompt = () => {
    let ans = confirm('Would you like to change your background color?');
    if (ans) {
        inputColorFunc();
    }
};

inputColorFunc = () => {
    let varColor = prompt(`Please enter a color blue.`);
    if (colorBlue.includes(varColor.toLowerCase())) {
        let changeColor = (document.querySelector('body').style.backgroundColor = `blue`);
        alert("You've changed your background color.");
    } else {
        alert("Incorrect data entered.");
        initialPrompt();
    }
};

initialPrompt();

// TASK 3


// let example = document.getElementsByTagName(`h1`)[0].innerHTML;
// let example = document.querySelector(`div`).style.color = `blue`;
// let example = (document.querySelector(`.testClass`)[1].style.color = `red`);