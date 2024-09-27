
// Feature 1
function Conditionals(time,day){
var reward ="";
if(time==10){
    reward="Latte";
}else if(time>10 && time<16){
    reward="Hot Choclate";
}else if(time>16 && time<22){
    if(day=="Wednsday"){
        reward="Strawberry";
    }else{
        reward="Vanilla";
    }
}else{
    reward="sleep";
}
return reward;

//Feature 2
function Hard(time,day){
    var reward ="";
    if(time==10){
        reward="Latte";
    }else if(time>10 && time<16){
        reward="Hot Choclate";
    }else if(time>16 && time<22){
        if(day=="Wednsday"){
            reward="Strawberry";
            var ice=reward;
        }else{
            reward="Vanilla";
            ice=reward;
        }
    }else if(time>15 && time<18){
        if(time%2==0){
            reward=ice;
        }else{
            reward="Hot Choclate";
        }
    }else{
        reward="sleep";
    }
    return reward;
    }

//Feature 3
function SuperHard(time,day){
    var reward ="";
    var even=["ice cream","cookies","candy"];
    var odd=["hot choclate","tea","cake"];
    if(time==10){
        reward="Latte";
    }else if(time>15 && time<18){
        if(time%2==0){
            reward=even[Math.floor(Math.random() * even.length)];
        }else{
            reward=odd[Math.floor(Math.random() * odd.length)];
        }
    }else if(time>10 && time<16){
        reward="Hot Choclate";
    }else if(time>16 && time<22){
        if(day=="Wednsday"){
            reward="Strawberry";
        }else{
            reward="Vanilla";
        }
    }else{
        reward="sleep";
    }
    return reward;
}