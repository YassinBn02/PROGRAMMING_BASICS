function minToFront(arr){
    var j=0;
    var min=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
            j=i;
        }
    }
    var temp=0
    for(var i=j;i>0;i--){
        temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
    }
    return arr;
}