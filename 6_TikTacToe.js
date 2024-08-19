let container=document.querySelector(".container");
let boxs=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".newGameBtn");
let winnerHtml=document.querySelector(".winner");
let msg1=document.querySelector(".msg1");
let msg2=document.querySelector(".msg2");
let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
let count=0
boxs.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        let i=0;
        i=checkWinner();
        if(count==8 && i!=1)
        {
            winnerContainer("D");
        }
        count++;
    });
});
//Check Winner Of Game
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let position1=boxs[pattern[0]].innerText;
        let position2=boxs[pattern[1]].innerText;
        let position3=boxs[pattern[2]].innerText;
        if(position1!="" &&position2!="" &&position3!="")
        {
            if(position1==position2 &&position3==position2 &&position1==position3)
            {
                winnerContainer(position1);
                return 1;
            }   
        }
    }
}
//Visibility of winner Container
const winnerContainer=(player)=>
{
    if(player=="D")
    {
        msg2.innerText="Match Draw";
        msg1.innerText="😣😣😣";    
    }
    else{
        msg1.innerText="✨✨✨🎉✨✨✨";
        msg2.innerText="Winner is "+player;
    }
    winnerHtml.classList.remove("hide");
    container.classList.add("hide")
    newGameBtn.addEventListener("click",resetGame)
    return 1;
}
//unable all boxes for new game
const unableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerHTML=""
    }
}
// for new game and reset
const resetGame=()=>{
    turnO=true;
    unableBoxes();
    winnerHtml.classList.add("hide");
    container.classList.remove("hide")
    count=0
}

resetBtn.addEventListener("click",resetGame)