var firstPlayer = new Player("first");
var secondPlayer = new Ai("second"); //TODO: Make these two classes inherit same parent.

function clickImage(elementID){
    let currentDOM = document.getElementById(elementID);
    currentDOM.classList.add("outlineForImg");
    firstPlayer.MakeMove(elementID); //Give string as parameter.
    secondPlayer.MakeMove(); //Second player is AI in this case.
    decideResult();
    haltClicking(200,currentDOM); //While deciding, prevent users spamming stuff.
}

function haltClicking(time,currentDOM){
    if(!isNaN(time)){ //Check if it is a number.
        MakeUnClickable();
        setTimeout( () => {
            MakeClickable();
            currentDOM.classList.remove("outlineForImg"); 
            //Outline makes it spaghetti, but it is better than adding another callback function just for this.
        }, time);
    }  
}
function MakeUnClickable(){
    document.getElementById("firstRock").classList.add('notClickable');
    document.getElementById("firstPaper").classList.add('notClickable');
    document.getElementById("firstScissors").classList.add('notClickable');
}
function MakeClickable(){
    document.getElementById("firstRock").classList.remove('notClickable');
    document.getElementById("firstPaper").classList.remove('notClickable');
    document.getElementById("firstScissors").classList.remove('notClickable');
}
function UpdateScores(){
    //It is worse to update everything, but i want to avoid weird changes.
    document.getElementById("firstScore").innerHTML = Game.firstScore;
    document.getElementById("tieScore").innerHTML = Game.tieScore;
    document.getElementById("secondScore").innerHTML = Game.secondScore;
}
function ResetScores(){
    Game.ResetScores();
    UpdateScores();
}
function decideResult(){
    //This is DOM level of calling game logic.
    //Rock = 0 | Paper = 1 | Scissors = 2
    let result = Game.Result(firstPlayer.currentChoice,secondPlayer.currentChoice);
    console.log("First :" + firstPlayer.currentChoice);
    console.log("Second :" + secondPlayer.currentChoice);
    Game.AddScore(result);
    UpdateScores();
    UpdateText(result);
}
function UpdateText(result){
    //TODO: Maybe also show who picked who at the last round.
    //result => -1 = first wins | 0 = tie | 1 = second player wins
    let newText = "Couldn't determine score."; //Default value.
    if(result === -1){
        newText = "First player wins !";
    }
    else if(result === 0){
        newText = "It's a tie !";
    }
    else if(result === 1){
        newText = "Second player wins !";
    }
    document.getElementById("infoText").innerHTML = newText;
}