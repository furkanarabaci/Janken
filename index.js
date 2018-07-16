function clickImage(elementID){
    let currentDOM = document.getElementById(elementID);
    currentDOM.classList.add("outlineForImg");
    haltClicking(1000,currentDOM);
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
    document.getElementById("playerRock").classList.add('notClickable');
    document.getElementById("playerPaper").classList.add('notClickable');
    document.getElementById("playerScissors").classList.add('notClickable');
}
function MakeClickable(){
    document.getElementById("playerRock").classList.remove('notClickable');
    document.getElementById("playerPaper").classList.remove('notClickable');
    document.getElementById("playerScissors").classList.remove('notClickable');
}
function updateScores(){
    //It is worse to update everything, but i want to avoid weird changes.
    document.getElementById("firstScore").innerHTML = Game.firstScore;
    document.getElementById("tieScore").innerHTML = Game.tieScore;
    document.getElementById("secondScore").innerHTML = Game.secondScore;
}
function ResetScores(){
    Game.ResetScores();
    updateScores();
}