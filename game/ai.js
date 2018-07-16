let Ai= {
    //Rock = 0 | Paper = 1 | Scissors = 2
    //For now, ai will just randomly select one of them.
    //Later, i will add a prediction algorithm.
    currentChoice : 0, //Just beware of undefined ones.
    Randomize : function(){
        //It just returns a number.
        this.currentChoice = Math.random() * 3;
        return this.currentChoice;
    }
}