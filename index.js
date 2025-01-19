let userscore=0;
let compscore=0;

const choices=document.querySelectorAll('.choice')
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

const gencompchoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame=()=>{
    console.log("game was draw...")
    msg.innerText="Game was draw.."
    msg.style.backgroundColor="purple";
}
 
const showwinner=(userwin )=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore
        msg.innerText="You win"
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore
        msg.innerText="You loose"
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log('user choice =',userchoice)
    const compChoice=gencompchoice();
    console.log('compture choice =',compChoice)

    if(userchoice===compChoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else  if(userchoice==="paper"){
            userwin = compChoice === "scissors"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showwinner(userwin)
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        // console.log("choice was clicked",userchoice)
        playgame(userchoice);
    })
})