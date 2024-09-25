// we need a loop becauce  we are going to re do it every time
// the loop start from 0
// the loop stop at 6
// it know when to stop with the condition
// in each iteration index i incremate and the miles incremet to
// we need two variables i as a index for the loop and miles to  count miles


var miles = 1
for(var i = 0; i <= 6; i++){
if(miles % 2 ==0){
    console.log("give a candy at mile " + miles)
}
miles++
}

// rest miles at 1 to start again
miles=1;

//add a new variable to know how fast he is
var MilesPH = 5.5

// the same loop but we add the fast condition to if 
for(var i = 0; i <= 6; i++){
    if(miles % 2 ==0 && MilesPH > 5.5){
        console.log("give a candy at mile " + miles)
    }
    miles++
    }