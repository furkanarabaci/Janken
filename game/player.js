class Player {
    //Rock = 0 | Paper = 1 | Scissors = 2
    constructor(playerType){
        this.currentChoice = -1; //Behave like buffer just in case.
        this.playerType = playerType; //first or second, string
    }
    MakeMove (type) {
        if(type === this.playerType + "Rock"){
            this.currentChoice = 0;
        }
        else if( type === this.playerType + "Paper"){
            this.currentChoice = 1;
        }
        else if(type === this.playerType + "Scissors"){
            this.currentChoice = 2;
        }
        else{
            alert("Wrong player, mostly.");
            return; //Check your parameters and object initializations.
        }
        return this.currentChoice;
    }
}