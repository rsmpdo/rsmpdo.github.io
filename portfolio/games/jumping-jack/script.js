var runStart=0;

function keyCheck(event){

    if(event.which==13){
        
        if(runWorkerId==0){
            runWorkerId=setInterval(run,100);
            runStart=1;
            runSound.play();

            backgroundWorkerId=setInterval(moveBackground,100);
            scoreWorkerId=setInterval(updateScore,250);
            createBlockId=setInterval(createBlock,100);
            moveBlocksId=setInterval(moveBlocks,100);
        }
    
    }

    if(event.which==32){
        
        if(runStart==1){
              
        if(jumpWorkerId==0){
            jumpWorkerId=setInterval(jump,100);
            jumpSound.play();
          
            clearInterval(runWorkerId);
            runSound.pause();
       }
    }

    }
}

var runSound=new Audio("run.mp3");
runSound.loop=true;

var jumpSound=new Audio("jump.mp3");

var deadSound=new Audio("dead.mp3");

var boy=document.getElementById("boy");
var runImageNumber=2;
var runWorkerId=0;
var jumpImageNumber=1;
var jumpWorkerId=0;
var boyMarginTop=435;

function run(){
     boy.src="Run ("+runImageNumber+").png";
     runImageNumber++;

     if(runImageNumber==9){
        runImageNumber=1;
     }
}

function jump(){
    
     jumpImageNumber++;

   if(jumpImageNumber<=7){
    boyMarginTop=boyMarginTop-30;
    boy.style.marginTop=boyMarginTop+"px"
}

if(jumpImageNumber>=8){
boyMarginTop=boyMarginTop+30;
boy.style.marginTop=boyMarginTop+"px";
}

if(jumpImageNumber==13){
    jumpImageNumber=1;
    clearInterval(jumpWorkerId);
    jumpWorkerId=0;

    runWorkerId=setInterval(run,100);
    runSound.play();
}

boy.src="Jump ("+jumpImageNumber+").png";

}

var background=document.getElementById("background");
var backgroundX=0;
var backgroundWorkerId=0;

function moveBackground(){
    backgroundX=backgroundX-20;
    background.style.backgroundPositionX=backgroundX+"px";
}

var score=document.getElementById("score");
var newScore=00;
var scoreWorkerId=0;

function updateScore(){
     newScore++;
     score.innerHTML=newScore;
     score.style.color="black";
     score.style.fontSize="58px";
     score.style.fontFamily="Arial";
     score.style.borderStyle="none";
     score.style.backgroundColor="transparent";
     
     if(score.style.color="black"){
        score.style.cursor="default";
    }
}


var blockMarginLeft=1000;
var createBlockId=0;
var blockId=1;
var moveBlocksId=0;

function createBlock(){
    var block=document.createElement("div");
    block.className="block";

    block.id="block"+blockId;
    blockId++;

    var gap=Math.random()*(1000-400)+400;

    blockMarginLeft=blockMarginLeft+gap;
    
    block.style.marginLeft=blockMarginLeft+"px";
    background.appendChild(block);
}

function moveBlocks(){
    for(var i=1;i<=blockId;i++){
       var currentBlock=document.getElementById("block"+i);
       var currentMarginLeft=currentBlock.style.marginLeft;
       var newMarginLeft=parseInt(currentMarginLeft)-20;
       currentBlock.style.marginLeft=newMarginLeft+"px";
       if(newMarginLeft<140){
        if(newMarginLeft>60){
            if(boyMarginTop<=435){
                if(boyMarginTop>=375){
                    clearInterval(runWorkerId);
                    runSound.pause();
                    clearInterval(jumpWorkerId);
                    clearInterval(backgroundWorkerId);
                    jumpWorkerId=-1;
                    clearInterval(scoreWorkerId);
                    clearInterval(createBlockId);
                    clearInterval(moveBlocksId);

                    deadWorkerId=setInterval(dead,100);
                    deadSound.play();                
                }
            }
        }
       }
} 
}  
     
function alerts(){
    alert("Press Enter Key to start the Game & Use the Space Key to jump. Enjoy!");
    
    if(alerts=true){
            ;
    }

}

var deadImageNumber=1;
var deadWorkerId=0;

function dead(){
    deadImageNumber++;

    if(deadImageNumber==11){
        deadImageNumber=10;

        boy.style.marginTop="435px";
        document.getElementById("gameOver").style.visibility="visible";
        document.getElementById("endScore").innerHTML=newScore;
    
    }

    boy.src="Dead ("+deadImageNumber+").png";

}

function re(){
     location.reload();
}

function buttonAnimate(){
    document.getElementById("btn").style.backgroundColor="red";
}

function scoreAnimate(){
    score.style.color="black";
    score.style.fontSize="58px";
    score.innerHTML="0";
    score.style.fontFamily="Arial";
    score.style.borderStyle="none";
    score.style.backgroundColor="transparent";

    if(score.style.color="black"){
        score.style.cursor="default";
    }
}