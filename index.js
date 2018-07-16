function clickImage(elementID){
    let currentDOM = document.getElementById(elementID);
    currentDOM.classList.add("outlineForImg");
    haltClicking(1000,currentDOM);
}
function updateScore(type){
    let currentDOM = currentDOM = document.getElementById(type);
    if(type === "first"){
        currentDOM.innerHTML = Game.firstScore;
    }
    else if(type === "second"){

    }
    else if(type === "tie"){

    }
    else{
        return;
        //Invalid parameter.
    }
}
function haltClicking(time,currentDOM){
    if(!isNaN(time)){ //Check if it is a number.
        let rock = document.getElementById("playerRock");
        let paper = document.getElementById("playerPaper");
        let scissors = document.getElementById("playerScissors");

        rock.classList.add('notClickable');
        paper.classList.add('notClickable');
        scissors.classList.add('notClickable');
        setTimeout( () => {
            rock.classList.remove('notClickable');
            paper.classList.remove('notClickable');
            scissors.classList.remove('notClickable');

            currentDOM.classList.remove("outlineForImg"); 
            //A little spaghetti, but it is better than adding another callback function here.
        }, time);
    }  
}