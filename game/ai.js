class Ai{
    //Rock = 0 | Paper = 1 | Scissors = 2
    //For now, ai will just randomly select one of them.
    //Later, i will add a prediction algorithm.
    Randomize(){
        //It just returns a number.
        return Math.random() * 3;
    }
}