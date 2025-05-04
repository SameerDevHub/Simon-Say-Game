let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];
let scoreArray=[];
let highestScore;

let started=false;
let level=0;
let h2=document.querySelector("h2");
let start=document.getElementById("start");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
start.addEventListener("click",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);

}
function levelUp(){
    start.style.display="none";
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}
function checkAns(indx){
    
    if(userseq[indx]===gameseq[indx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        scoreArray.push(level);
        if(scoreArray.length==1){
            highestScore=scoreArray[0];
            h2.innerHTML=`Game Over ! Your Score : ${level} <br> Highest Score :${highestScore}<br> press any key to start`;
        }
        else{
            for(let i=0;i<scoreArray.length;i++){  
                if(scoreArray[i]>highestScore){
                    highestScore=scoreArray[i];
                }
            }
            h2.innerHTML=`Game Over ! Your Score : ${level} <br> Highest Score :${highestScore}<br> press any key to start`;
        }
        
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
