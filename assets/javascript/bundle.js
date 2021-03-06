// VARIABLES
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let screenSM = 479;
let screenMD = 767;
let screenLG = 991;


/* Set the width of the side navigation to 250px */
let openNav = function () {

    // document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").classList.remove('hide');
    if (windowWidth > screenSM) {
        let width = document.getElementById("mySidenav").offsetWidth;
        // document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("main").style.marginLeft = width + 'px';
    } else {
        if (document.querySelector('.page-background'))
            document.querySelector('.page-background').style.filter = 'blur(4px)';
    }

}

/* Set the width of the side navigation to 0 */
let closeNav = function () {
    // document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("mySidenav").classList.add('hide');
    if (windowWidth > screenSM) {

    } else {
        document.getElementById("main").style.marginLeft = "0px";

        if (document.querySelector('.page-background'))
            document.querySelector('.page-background').style.filter = 'blur(0px)';
    }
}

// create a sleep function for an async function
let sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let descriptions = ['Full Stack Developer', 'Programmer', 'Traveler'];
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

let screenResized = function () {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    // console.log(windowWidth);

    // check screen size;
    if (windowWidth > screenSM) {
        // document.querySelector('.sidenav').style.width = '250px';
        openNav();
        // console.log(document.querySelector('.sidenav .closebtn'));
        // document.querySelector('.sidenav .closebtn').classList.add('hide');
        document.querySelector('.sidenav .closebtn').style.display = 'none';
        document.querySelector('.sidebar-toggle').classList.add('hide');

    } else {
        closeNav();
        // document.querySelector('.sidenav .closebtn').classList.remove('hide');
        document.querySelector('.sidenav .closebtn').style.display = null;
        document.querySelector('.sidebar-toggle').classList.remove('hide');
    }
}

let faded = document.querySelectorAll('.pfaded');
faded.forEach(element => {
    element.addEventListener('mouseover', listener);
    element.addEventListener('mouseout', listener);
})

function listener(event) {
    switch (event.type) {
        case 'mouseover':
            // event.srcElement.classList.add('pcard-toggle');
            // event.srcElement.childNodes[1].classList.add('hide');
            this.classList.add('pcard-toggle');
            this.childNodes[1].classList.add('hide');
            break;
        case 'mouseout':
            this.classList.remove('pcard-toggle');
            this.childNodes[1].classList.remove('hide');
            break;
    }
}