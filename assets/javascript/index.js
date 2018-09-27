// VARIABLES
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let screenSM = 479;
let screenMD = 767;
let screenLG = 991;

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    if (windowWidth > screenSM) {
        document.getElementById("main").style.marginLeft = "250px";
    }
    else {
        document.querySelector('.page-background').style.filter = 'blur(4px)';
    }

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    if (windowWidth > screenSM){
        document.getElementById("main").style.marginLeft = "0";
    }
    else {
        document.querySelector('.page-background').style.filter = 'blur(0px)';
    }
}

// create a sleep function for an async function
let sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let descriptions = ['Web Developer', 'Full Stack Engineer', 'Programmer', 'Traveler'];
let typeSpeed = 150; // 100 milliseconds
let backspaceSpeed = 100;
let typewriter = document.querySelector('.typewriter');

let typeText = async function () {
    let counter = 0;

    while (1) {
        let currentDesc = descriptions[counter];

        // append text to the page
        for (let i = 0; i < currentDesc.length; i++) {
            typewriter.innerHTML += currentDesc[i];
            await sleep(typeSpeed);
        }

        // make it look liking a blinking cursor
        let text = typewriter.innerHTML;
        let us = document.querySelector('#typewriter-underscore');
        for (let i = 0; i < 3; i++) { // blink 3 times
            // typewriter.innerHTML += '_';
            us.classList.remove('invisible');
            await sleep(500);
            // typewriter.innerHTML = text;
            us.classList.add('invisible');
            await sleep(500);
        }
        // await sleep(1000); // sleep for a second

        // delete text from the page
        let currentText = typewriter.innerHTML;
        for (let i = 0; i < currentDesc.length; i++) {
            currentText = currentText.slice(0, currentText.length - 1);
            typewriter.innerHTML = currentText;
            await sleep(backspaceSpeed);
        }

        counter++;
        if (counter == descriptions.length)
            counter = 0;
    }

}


let screenResized = function() {
    // check screen size;
    if (windowWidth > screenSM) {
        // document.querySelector('.sidenav').style.width = '250px';
        openNav();
        console.log(document.querySelector('.sidenav .closebtn'));
        // document.querySelector('.sidenav .closebtn').classList.add('hide');
        document.querySelector('.sidenav .closebtn').style.display = 'none';
        document.querySelector('.sidebar-toggle').classList.add('hide');
        
    }
    else {
        closeNav();
        // document.querySelector('.sidenav .closebtn').classList.remove('hide');
        document.querySelector('.sidenav .closebtn').style.display = null;
        document.querySelector('.sidebar-toggle').classList.remove('hide');
    }
}




// EVENT LISTENERS
// document.querySelector('body').addEventListener('resize', screenResized);


// Startup calls
screenResized();
setTimeout(typeText, 1000);

console.log('Height: ' + window.innerHeight);
console.log('Width: ' + window.innerWidth);