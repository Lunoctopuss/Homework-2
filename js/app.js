// TASK 1

let currentDate;
let dateDob;
let dateUtc;

currentDate = new Date();

dateDob = new Date();
dateDob.setFullYear(1995, 02, 09);
dateDob.setHours(4);
dateDob.setMinutes(0);
dateDob.setSeconds(0);

let inputDate0 = alert(`Current date is ${currentDate}`)

let inputDate1 = alert(`My date of birth is ${dateDob}`);

let inputDate2 = alert(`I was born on the ${dateDob.getDate()}th.`)

let inputDate3 = alert(`Current date converted to UTC is ${new Date().toUTCString()} and my DOB converted to UTC is ${new Date(dateDob).toUTCString()}.`)


// TASK 2

const colours = ['blue', 'pink', 'red', 'yellow', 'green', 'orange', 'purple', 'black'];

initialPrompt = () => {
    let ans = confirm('Would you like to change your background colour?');
    if (ans) {
        inputColourFunc();
    }
};

inputColourFunc = () => {
    let varColour = prompt(`Please enter a colour.`);
    if (colours.includes(varColour.toLowerCase())) {
        document.body.style.backgroundColor = varColour;
        alert("You've changed your background colour.");
    } else {
        alert("Incorrect data entered.");
        initialPrompt();
    }
};

initialPrompt();

// TASK 3


function funcImg(value) {
    const div = document.getElementById("div");
    let text = "";

    if (value == 1) text += "Have";
    if (value == 2) text += "a great";
    if (value == 3) text += "day!";

    div.innerHTML = text;
}
