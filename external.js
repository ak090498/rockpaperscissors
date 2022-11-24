const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');



if(rock.addEventListener("click",()=>{
    player = 0;
    gamePlay(player,computerPlays());
}));

else if(paper.addEventListener("click",()=>{
    player =1;
    gamePlay(player,computerPlays());
}));

else if(scissors.addEventListener("click",()=>{
    player = 2;
    gamePlay(player,computerPlays());   
}));


const computerPlays =()=>{
    let computer =  (Math.floor(Math.random()*(9999))+9999)%3;
    console.log(computer);
    return computer;
}

const gamePlay = (playerChoose, computerChoose)=>{
        if(playerChoose==computerChoose)
        alert("draw");
        else if(playerChoose==0 && computerChoose==1)
        {
        alert("computer wins");
        }
        else if(playerChoose==0 && computerChoose==2)
        {
            alert("player wins");
        }
        else if(playerChoose==1 && computerChoose==0)
        {
            alert("computer wins");
        }
        else if(playerChoose==1 && computerChoose==2)
        {
            alert("computer wins");
        }
        else if(playerChoose==2 && computerChoose==0)
        {
            alert("computer wins");
        }
        else if(playerChoose==2 && computerChoose==1)
        {
            alert("player wins");
        }

}