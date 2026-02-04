if (browser == "Edje") {
  alert( "You've got the Edge!" );
}else if(browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera"){
    alert( 'Okay we support these browsers too' );
}else{
    alert( 'We hope that this page looks ok!' );
}
    
// another way

switch(browser){
    case "Edje":
        alert( "You've got the Edge!" );
    break;
    
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert("OKay we support these browsers too");
        break;
    default:
        alert("You've got the Edje!");
}

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

switch(a){
    case 0:
        alert(0);
    case 1:
        alert(1);
    case 2:
    case 3:
        alert("2,3");

}