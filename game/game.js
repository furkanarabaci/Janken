let Game = {
    //Rock = 0 | Paper = 1 | Scissors = 2
    firstScore : 0,
    tieScore : 0, //Only AddScore() will update them. 
    secondScore : 0,
    Result : function(first,second){
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
    },
    AddScore : function(result){ //Will only be called at DOM level.
        if(result < -1 || result > 1){
            return -1; //Invalid parameters
        }
        if(result === -1){
            Game.firstScore++;
        }
        else if(result === 1){
            Game.secondScore++;
        }
        else{
            Game.tieScore++;
        }
    }
}