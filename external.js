const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let you= 0;
let computer = 0;

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
    let x=document.getElementById("computer").textContent;
    let y=document.getElementById("you").textContent;
    let takenStringX="";
    let takenStringY="";
    //0===rock
    //1===paper
    //2===scissors
        if(playerChoose==computerChoose)
        {
    //    alert("draw");
        you+=1;
        computer+=1;
     
        for(let i=0; i<x.length; i++)
        {
            takenStringX=takenStringX+x.charAt(i);
            if(x.charAt(i)==="=")
            {
                break;
            }
        }
        for(let i=0; i<y.length; i++)
        {
            takenStringY=takenStringY+y.charAt(i);
            if(y.charAt(i)==="=")
            {
                break;
            }
        }
        document.getElementById("computer").textContent=takenStringX+" "+computer;
        document.getElementById("you").textContent=takenStringY+" "+you;
        }
        else if(playerChoose==0 && computerChoose==1)
        {
     //   alert("player wins");
            computer+=1;
        //player+=1;
            for(let i=0; i<x.length; i++)
            {
                takenStringX=takenStringX+x.charAt(i);
                if(x.charAt(i)==="=")
                {
                    break;
                }
            }
            for(let i=0; i<y.length; i++)
            {
                takenStringY=takenStringY+y.charAt(i);
                if(y.charAt(i)==="=")
                {
                    break;
                }
            } 
            document.getElementById("computer").textContent=takenStringX+" "+computer;   
   //    let yourPoints = document.getElementById("you");
        }
        else if(playerChoose==0 && computerChoose==2)
        {
        //    alert("player wins");
          you+=1;
          for(let i=0; i<x.length; i++)
          {
              takenStringX=takenStringX+x.charAt(i);
              if(x.charAt(i)==="=")
              {
                  break;
              }
          }
          for(let i=0; i<y.length; i++)
          {
              takenStringY=takenStringY+y.charAt(i);
              if(y.charAt(i)==="=")
              {
                  break;
              }
          } 
          document.getElementById("you").textContent=takenStringY+" "+you;
        }
        else if(playerChoose==1 && computerChoose==0)
        {
        //    alert("computer wins");
        you+=1;
        for(let i=0; i<x.length; i++)
        {
            takenStringX=takenStringX+x.charAt(i);
            if(x.charAt(i)==="=")
            {
                break;
            }
        }
        for(let i=0; i<y.length; i++)
        {
            takenStringY=takenStringY+y.charAt(i);
            if(y.charAt(i)==="=")
            {
                break;
            }
        } 
        document.getElementById("you").textContent=takenStringY+" "+you;   
        }
        else if(playerChoose==1 && computerChoose==2)
        {
            //alert("computer wins");
            computer+=1;
            for(let i=0; i<x.length; i++)
            {
                takenStringX=takenStringX+x.charAt(i);
                if(x.charAt(i)==="=")
                {
                    break;
                }
            }
            for(let i=0; i<y.length; i++)
            {
                takenStringY=takenStringY+y.charAt(i);
                if(y.charAt(i)==="=")
                {
                    break;
                }
            } 
            document.getElementById("computer").textContent=takenStringX+" "+computer;   
        }
        else if(playerChoose==2 && computerChoose==0)
        {
            //alert("computer wins");
            computer+=1;
            for(let i=0; i<x.length; i++)
            {
                takenStringX=takenStringX+x.charAt(i);
                if(x.charAt(i)==="=")
                {
                    break;
                }
            }
            for(let i=0; i<y.length; i++)
            {
                takenStringY=takenStringY+y.charAt(i);
                if(y.charAt(i)==="=")
                {
                    break;
                }
            } 
            document.getElementById("computer").textContent=takenStringX+" "+computer;   
        }
        else if(playerChoose==2 && computerChoose==1)
        {
            //alert("player wins");
            you+=1;
            for(let i=0; i<x.length; i++)
            {
                takenStringX=takenStringX+x.charAt(i);
                if(x.charAt(i)==="=")
                {
                    break;
                }
            }
            for(let i=0; i<y.length; i++)
            {
                takenStringY=takenStringY+y.charAt(i);
                if(y.charAt(i)==="=")
                {
                    break;
                }
            } 
            document.getElementById("you").textContent=takenStringY+" "+you;   
        }

}