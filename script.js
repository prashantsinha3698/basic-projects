const options=[
    {name:'rock',image:"./assets/rock.png"},
    {name:'paper',image:"./assets/paper.png"},
    {name:'scissor',image:"./assets/scissor.png"}
];
let scoreboard=JSON.parse(localStorage.getItem('scoreCard'))||{totalGames:0,totalWins:0,totalLoss:0};
window.onload = function() {
    scoreboard=JSON.parse(localStorage.getItem('scoreCard')) || {totalGames:0,totalWins:0,totalLoss:0};
    console.log(`Total Games: ${scoreboard.totalGames}\nTotal wins: ${scoreboard.totalWins}\nTotal Losses: ${scoreboard.totalLoss}`);
    element_totalGames.innerHTML=`${scoreboard.totalGames}`;
    element_totalWins.innerHTML=`${scoreboard.totalWins}`;
    element_totalLoss.innerHTML=`${scoreboard.totalLoss}`;
};
let resultMsg=``;
let resultComputerHand='';
const element_totalGames = document.getElementById("total-games-played");
const element_totalWins = document.getElementById("total-wins");
const element_totalLoss = document.getElementById("total-losses");
element_totalGames.innerHTML=`${scoreboard.totalGames}`;
element_totalWins.innerHTML=`${scoreboard.totalWins}`;
element_totalLoss.innerHTML=`${scoreboard.totalLoss}`;

const element_resultMsg = document.getElementById("gameResult");
const element_computerHand = document.getElementById("computerHand");
const element_heading = document.getElementById("compHeading");

function playComputer(playerHandIndex){
    let computerOption=Math.floor(Math.random()*3);
    let computerPlay= options[computerOption];

    scoreboard.totalGames++;
    if(playerHandIndex===0 && computerOption===2){
        scoreboard.totalWins+=1;
        resultMsg=`Hurray! you win🎉`;
        resultComputerHand = computerPlay.image;
    }
    else if((playerHandIndex > computerOption)){

        if(playerHandIndex===2 && computerOption===0){
            scoreboard.totalLoss+=1;
            resultMsg=`Sorry! you lost.`;
            resultComputerHand = computerPlay.image;
        }
        else{
            scoreboard.totalWins+=1;
            resultMsg=`Hurray! you win🎉`;
            resultComputerHand = computerPlay.image;
        }
    }
    else if(playerHandIndex===computerOption){
        resultMsg=`Its a Tie. Play again!`;
        resultComputerHand = computerPlay.image;
    }
    else{
        scoreboard.totalLoss+=1;
        resultMsg=`Sorry! you lost.`;
        resultComputerHand = computerPlay.image;
    }
    element_resultMsg.innerHTML = `<h3>${resultMsg}</h3>`;
    element_computerHand.innerHTML = `<img src="${resultComputerHand}" alt="" width="100%">`;
    element_heading.innerHTML = `<h3 style="text-align:center;">Computer's Hand</h2>`;
    element_totalGames.innerHTML=`${scoreboard.totalGames}`;
    element_totalWins.innerHTML=`${scoreboard.totalWins}`;
    element_totalLoss.innerHTML=`${scoreboard.totalLoss}`;

    console.log(`The result is: ${resultMsg} \n ${computerOption}\ncomputer's hand is: ${computerPlay.name}`);
    console.log(`Total Games: ${scoreboard.totalGames}\nTotal wins: ${scoreboard.totalWins}\nTotal Losses: ${scoreboard.totalLoss}`);
    console.log(scoreboard);

    localStorage.setItem('scoreCard',JSON.stringify(scoreboard));
    console.log('localStorage: '+localStorage.getItem('scoreCard'));

}

function playerResponse(playerHand){
    console.log(playerHand);
    let playerHandIndex=0;
    switch (playerHand){
        case 'rock':playerHandIndex=0;break;
        case 'paper':playerHandIndex=1;break;
        case 'scissor':playerHandIndex=2;break;
        default : resultMsg='Play your hand';break;
    }
    console.log(`playerHandIndex = ${playerHandIndex}`);
    console.log('localStorage: '+localStorage.getItem('scoreCard'));
    playComputer(playerHandIndex);

}
function resetScorecard(){
    scoreboard.totalGames=0;scoreboard.totalWins=0;scoreboard.totalLoss=0;
    element_resultMsg.innerHTML = ``;
    element_computerHand.innerHTML = ``;
    element_heading.innerHTML = ``;
    element_totalGames.innerHTML=`${scoreboard.totalGames}`;
    element_totalWins.innerHTML=`${scoreboard.totalWins}`;
    element_totalLoss.innerHTML=`${scoreboard.totalLoss}`;
    console.log(`Total Games: ${scoreboard.totalGames}\nTotal wins: ${scoreboard.totalWins}\nTotal Losses: ${scoreboard.totalLoss}`);
    console.log(scoreboard);
    localStorage.setItem('scoreCard',JSON.stringify(scoreboard));
}