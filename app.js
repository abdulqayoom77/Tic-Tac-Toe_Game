let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let gameoverr = false;
// Function TO Change Turn

const changeTurn = () => {
    return turn === "X" ? "Y" : "X";
}

// Funtion TO Check For a Win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if (boxtext[e[0]].innerHTML === boxtext[e[1]].innerText && boxtext[e[2]].innerHTML === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== '') {
            document.querySelector('.info').innerText = boxtext[e[0]].innerHTML + " WON"
            gameoverr = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
            gameover.play();
            resetAuto();
        }
    })
}

// Game Logic 

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameoverr) {
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
            }
        }
    })
})

let resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    gameoverr = false;
    document.getElementsByClassName('info')[0].innerText = "";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width = "0vw";

})


function resetAuto() {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    
}

let hireme = document.getElementById('hireme')
hireme.addEventListener("click", () => {
  window.open('mailto:abdulqayoomaijaz77@gmail.com', '_blank');
})