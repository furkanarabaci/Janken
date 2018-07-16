class Ai{
    //Rock = 0 | Paper = 1 | Scissors = 2
    //For now, ai will just randomly select one of them.
    //Later, i will add a prediction algorithm.
    constructor(playerType){
        this.currentChoice = -1; //Behave like buffer just in case.
        this.playerType = playerType; //first or second
    }
    MakeMove() {
        //It just returns a random number.
        this.currentChoice = Math.floor(Math.random() * 3);
        return this.currentChoice;
    }
}