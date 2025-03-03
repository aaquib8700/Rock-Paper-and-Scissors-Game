// let userscore=0;
// let compscore=0;

// const user=document.querySelector("#user-score");
// const comp=document.querySelector("#comp-score");
// const msg=document.querySelector("#msg")
// const choices=document.querySelectorAll(".choice");

// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userchoice=choice.getAttribute("id")
//         playgame(userchoice);
//     })
// })

// const playgame=(userchoice)=>{
//     const compchoice=gencompchoice();
//     if(userchoice===compchoice){
//         drawgame();
//     }
//     else{
//         let userwin=true;
//         if(userchoice==="rock"){
//             userwin=compchoice==="paper"? false:true;
//         }
//         else if(userchoice==="paper"){
//             userwin=compchoice==="scissors"? false:true;
//         }
//         else{
//             userwin=compchoice==="rock"? false:true;
//         }
//         showwinner(userwin,userchoice,compchoice);
//     }
// }

// const gencompchoice=()=>{
//     const options=["rock","paper","scissors"];
//     const  randind=Math.floor(Math.random()*3);
//     return options[randind];
// }

// const drawgame=()=>{
//     msg.innerText="Game was draw,Play again";
//     msg.style.backgroundColor="#081b31";   
// }

// const showwinner=(userwin,userchoice,compchoice)=>{
//     if(userwin){
//         msg.innerText=`You win!Your ${userchoice} beats ${compchoice}`
//         msg.style.backgroundColor="green";
//         userscore++;
//         user.innerText=userscore;
//     }
//     else{
//         msg.innerText=`You loose ${compchoice} beats ${userchoice}`;
//         msg.style.backgroundColor="red";
//         compscore++;
//         comp.innerText=compscore;
//     }
// }

let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const user=document.querySelector(".userscore");
const comp=document.querySelector(".compscore");
const msg=document.querySelector(".msg");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log(userchoice);
        
        playgame(userchoice);
    })
})

function playgame(userchoice){
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        const userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"? false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"? false:true;
        }
        else{
            userwin=compchoice==="rock"? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    
}

function gencompchoice(){
    const options=["rock","scissors","paper"];
    const randind=Math.floor(Math.random()*3);
    return options[randind];
    // console.log(arr[randind]); 
}

function drawgame(){
    msg.innerText="Game was draw,Play Again";
    msg.style.backgroundColor="#081b31"
}

function showwinner(userwin,userchoice,compchoice){
    if(userwin){
        msg.innerText=`You Won ! your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
        userscore++;
        user.innerText=userscore;
    }
    else{
        msg.innerText=`You loose ! computer's ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red";
        compscore++;
        comp.innerText=compscore;
    }
}

// let userscore=0;
// let compscore=0;

// const choices=document.querySelectorAll(".choice");
// const user=document.querySelector(".userscore");
// const comp=document.querySelector(".compscore");
// const msg=document.querySelector(".msg");

// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userchoice=choice.getAttribute("id");
//         playgame(userchoice);
//     })
// })

// function playgame(userchoice){
//     const compchoice=genocompchoice();
//     if(userchoice==compchoice){
//         drawgame();
//     }
//     else{
//         let userwin=true;
//         if(userchoice=='rock'){
//             userwin=compchoice=='paper'? false:true;
//         }
//         else if(userchoice=='scissors'){
//             userwin=compchoice=='rock'? false:true;
//         }
//         else{
//             userwin=compchoice=='scissors'? false:true;
//         }
//         showwinner(userwin,userchoice,compchoice);
//     }
// }
// function genocompchoice(){
//     const options=['rock','paper','scissors'];
//     const randomidx=Math.floor(Math.random()*3);
//     return options[randomidx];
// }
//  const drawgame=()=>{
//     msg.textContent=`Game was Draw,Play Again`;
//     msg.style.backgroundColor="brown";
// }
// function showwinner(userwin,userchoice,compchoice){
//     if(userwin){
//         msg.innerText=`You Won!!,your ${userchoice} beats ${compchoice}`;
//         msg.style.backgroundColor="green";
//         userscore++;
//         user.textContent=userscore;
//     }
//     else{
//         msg.innerText=`You loose!!,computer's ${compchoice} beats ${userchoice}`;
//         msg.style.backgroundColor="red";
//         compscore++;
//         comp.textContent=compscore;
//     }
// }

