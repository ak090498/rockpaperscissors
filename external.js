const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let container = document.createElement('container');
let you= 0;
let computer = 0;

if(rock.addEventListener("click",()=>{
    player = 0;
    let computer = computerPlays();
    gamePlay(player,computer);
    choseWhat(player,computer);
}));

else if(paper.addEventListener("click",()=>{
    player =1;
    let computer = computerPlays();
    gamePlay(player,computer);
    choseWhat(player,computer);
}));

else if(scissors.addEventListener("click",()=>{
    player = 2;
    let computer = computerPlays();
    gamePlay(player,computer);
    choseWhat(player,computer);
}));

const choseWhat = (player,computerPlays)=>{
    if(player === 0)
     {
        let extraString = "You chose rock";
        document.getElementById('youChoseWhat').textContent = extraString;
     }
     if(computerPlays === 0)
     {
        let extraString = "Computer chose rock";
        document.getElementById('computerChoseWhat').textContent = extraString;

     }
     if(player === 1)
     {
        let extraString = "You chose paper";
        document.getElementById('youChoseWhat').textContent = extraString;
     }
     if(computerPlays === 1)
     {
        let extraString = "Computer chose paper";
        document.getElementById('computerChoseWhat').textContent = extraString;

     }
     if(player === 2)
     {
        let extraString = "You chose scissors";
        document.getElementById('youChoseWhat').textContent = extraString;
     }
     if(computerPlays === 2)
     {
        let extraString = "Computer chose scissors";
        document.getElementById('computerChoseWhat').textContent = extraString;

     }
}

const computerPlays =()=>{
    let computer =  (Math.floor(Math.random()*(9999))+9999)%3;
  //  console.log(computer);
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
        if(you === 3 && computer<you)
        {
           document.getElementById("heading-part").textContent="You win!";
           document.getElementById("layer").style.visibility="visible";
           document.getElementById("container").style.visibility="hidden";
        }
        if(computer === 3 && you<computer)
        {
            document.getElementById("heading-part").textContent="Computer wins!";
            document.getElementById("layer").style.visibility="visible";
            document.getElementById("container").style.visibility="hidden";
          
        }
        else if(computer === 3 && you === 3)
        {
           document.getElementById("heading-part").textContent="Draw";
           document.getElementById("layer").style.visibility="visible";
           document.getElementById("container").style.visibility="hidden";
         
        }

}
play.addEventListener("click",()=>{
   let x= document.getElementById("you").textContent;
   let y= document.getElementById("computer").textContent;
   let takenStringX ="";
   let takenStringY ="";
   let p = " ";
   let c = " ";
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
   document.getElementById("container").style.visibility="visible";
   document.getElementById("layer").style.visibility="hidden";
   document.getElementById("you").textContent=takenStringX+" "+p;
   document.getElementById("computer").textContent=takenStringY+" "+c;
   document.getElementById("heading-part").textContent="You vs Computer first to 3 points wins !";
   document.getElementById("youChoseWhat").textContent="";
   document.getElementById("computerChoseWhat").textContent="";
   you=0;
   computer=0;
})
