num = prompt("enter a num: ", "");
if(i<2){
    alert("not a prime number");
}
for(i = 2; i<=num; i++){
    a = true;
    for(j = 2; j<i; j++){
        if(i%j==0){
            a = false;
            break;
        }
    }
    if(a){
        alert(i);
    }
}