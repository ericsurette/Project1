let userbadge = 0;
let compbadge = 0;
const userbadge_span = document.getElementById('user-score');
const compbadge_span = document.getElementById('comp-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertedToWord(letter){
    if (letter === 'r') return 'ROCK';
    if (letter === 'p') return 'PAPER';
    if (letter === 's') return 'SCISSOR';
}

function endGame(userChoice, computerChoice){
    if(userbadge == 10){
        Swal.fire({
            title: 'You Win',
            animation: true,
            confirmButtonText: 'Play Again',
            customClass: {
              popup: 'animated tada'
            }
            

          })
            }
         
        

    if(compbadge == 10){
        Swal.fire({
            title: 'You Lose',
            animation: true,
            confirmButtonText: 'Play Again',
            customClass: {
              popup: 'animated tada'
            }
            

          })
            }
         
    }
   

function win(userChoice, computerChoice){
 userbadge++;
 userbadge_span.innerHTML = userbadge;
 compbadge_span.innerHTML = compbadge;
 const smallUserWord = 'user'.fontsize(3).sub();
 const smallComWord = 'com'.fontsize(3).sub();
 result_div.innerHTML = `${convertedToWord(userChoice)}${smallUserWord} beats ${convertedToWord(computerChoice)}${smallComWord}  You Win!!!!! 🔥`
document.getElementById(userChoice).classList.add('greenglow');
setTimeout(() => document.getElementById(userChoice).classList.remove('greenglow'), 500);
endGame()

}

function lose(userChoice, computerChoice){
    compbadge++;
    userbadge_span.innerHTML = userbadge;
    compbadge_span.innerHTML = compbadge;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallComWord = 'com'.fontsize(3).sub();
    result_div.innerHTML = `${convertedToWord(userChoice)}${smallUserWord} Lose To ${convertedToWord(computerChoice)}${smallComWord}  You Lost!!!!! 💩`
    document.getElementById(userChoice).classList.add('redglow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('redglow')}, 500);
    endGame()
}


function draw(userChoice, computerChoice){
    
    userbadge_span.innerHTML = userbadge;
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallComWord = 'com'.fontsize(3).sub();
    result_div.innerHTML = `${convertedToWord(userChoice)}${smallUserWord} Equals ${convertedToWord(computerChoice)}${smallComWord} It's a Draw!!!! 😱`
    document.getElementById(userChoice).classList.add('grayglow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grayglow')}, 500);
}



function Game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
        win(userChoice, computerChoice);
        break;
        case 'sr':
        case 'rp':
        case 'ps':
        lose(userChoice, computerChoice);
        break;
        case 'rr':
        case 'pp':
        case 'ss':
        draw(userChoice, computerChoice);
        break;
    }
}

main();

function main(){
    rock_div.addEventListener('click', function(){
        Game('r')
     })
     
     paper_div.addEventListener('click', function(){
         Game('p')
     })
     
     
     scissor_div.addEventListener('click', function(){
         Game('s')
     })
}



