// to know if he can ride or not
var age = 10
var height = 42

//If the rider's height is greater than or equal to 42
if (height>=42){
    console.log("get on the ride,Kiddo! ")
}
else{
    console.log("Sorry kiddo.maybe next year")
}

//if both height (>=42 inches) and age (>=10 years old)
if(height >=42 && age>=10){
    console.log("get on the ride,Kiddo! ")
}
else{
    console.log("Sorry kiddo.maybe next year")
}


//if either the height requirement (>=42 inches) or the age requirement (>=10 years old) 
if(height >=42 || age>=10){
    console.log("get on the ride,Kiddo! ")
}
else{
    console.log("Sorry kiddo.maybe next year")
}
