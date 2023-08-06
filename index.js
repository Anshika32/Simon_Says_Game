let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

function sound1() {
   let audio1 = new Audio("sounds/sound1.mp3");
   audio1.play();
}

let button = document.querySelector("button");
button.onclick = () => {
    if (started == false) {
        console.log("Game is started!");
        started = true;
    }
    levelUp(); 
    sound1();
};


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function sound2() {
    let audio2 = new Audio("sounds/sound2.mp3");
   audio2.play();
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
    sound2();
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function sound3() {
    let audio3 = new Audio("sounds/sound3.mp3");
    audio3.play();
}

function checkAns(idx) {

    if(userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
       h2.innerHTML = `Game Over! Your score was <b>${level}</b><br /> Please Try Again.`;
       h2.style.color = 'red';
       sound3();
       reset();
    }

}


function btnPress() {
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}