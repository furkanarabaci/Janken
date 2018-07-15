class Game{
    constructor(){
        this.firstScore = 0;
        this.tieScore = 0; //Update these on DOM level for better scalability.
        this.secondScore = 0;
    }
    //Rock = 0 | Paper = 1 | Scissors = 2
    Result(first,second){
        //-1 = first wins | 0 = tie | 1 = second player wins
        if(first < 0 || second < 0 || first > 2 || second > 3){
            return -2;  // invalid parameters. Warn user accordingly.
        }
        if(first === second){
            return 0;
        }
        //We handled ties, now on to different choices.
        if(first === 0 && second === 1){
            return 1;
        }
        else {
            return -1;
        }

        if(first === 1 && second === 2){
            return 1;
        }
        else{
            return -1;
        }

        if(first == 2 && second === 0){
            return 1;
        }
        else{
            return -1;
        }
    }
    AddScore(result){
        if(result < -1 || result > 1){
            return -1; //Invalid parameters
        }
        if(result === -1){
            this.firstScore++;
        }
        else if(result === 1){
            this.secondScore++;
        }
        else{
            this.tieScore++;
        }
    }
}