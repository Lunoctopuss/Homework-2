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

const colours = ['blue', 'pink', 'red', 'yellow', 'green', 'orange', 'purple', 'white', 'black'];

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


function funcImg1() {
    let image_Id = document.getElementById('changePic1');
    if (image_Id.src.match("https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?cs=srgb&dl=pexels-pixabay-2150.jpg&fm=jpg")) {
        image_Id.src = "https://images.pexels.com/photos/10325736/pexels-photo-10325736.jpeg?cs=srgb&dl=pexels-eriks-cistovs-10325736.jpg&fm=jpg";
    }
    else {
        image_Id.src = "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?cs=srgb&dl=pexels-pixabay-2150.jpg&fm=jpg";
    }
}   

funcImg1();

// function changeImg (a)

// document.getElementById("pic1").addEventListener("click", changePic);

// document.getElementById("testID").style.color = "purple";

// let example = document.getElementsByTagName(`h1`)[0].innerHTML;
// let example = document.querySelector(`div`).style.color = `blue`;
// let example = (document.querySelector(`.testClass`)[1].style.color = `red`);