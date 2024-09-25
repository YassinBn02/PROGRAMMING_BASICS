function HowMuchLeftOverCake(numberOfPieces,numberOfPeopel){
    return numberOfPieces - numberOfPeopel
}

function leftOverCake(numberOfPieces,numberOfPeopel){
    if(HowMuchLeftOverCake(numberOfPieces,numberOfPeopel) == 0){
        return "No leftovers for you!"
    }else if(HowMuchLeftOverCake(numberOfPieces,numberOfPeopel) <= 2){
        return "You have some leftovers"
    }else if(HowMuchLeftOverCake(numberOfPieces,numberOfPeopel) >= 3 && HowMuchLeftOverCake(numberOfPieces,numberOfPeopel) <=5 ){
        return "You have leftovers to share"
    }else{
        return "Hold another party!"
    }
}