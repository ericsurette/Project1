var origBoard;
const player = "X";
const comp = "O";
const WinCombos = [
    [0, 1, 2],
   [0, 4, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [3, 4, 5],
   [6, 7, 8],
   [2, 4, 6]
]

const square = document.querySelectorAll(".square");
startGame();

function startGame(){
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys());
    console.log(origBoard);
    for (var i = 0; i < square.length; i++) {
        square[i].innerText = '';
        square[i].style.removeProperty("background-color");
        square[i].addEventListener('click', turnClick, false);

    }
}

function turnClick(cell){
turn(cell.target.id, player);
}

function turn(squareId, player){
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)
}

checkWin(board, player){
     lets play = board.reduce((a, e, i) =>(e === player)) ? a.concat(i) : a, [];
     lets gameWon = null;
     for (let [index, win] of winCombos.entries()){

     }

}