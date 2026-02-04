function func(){
    alert("hi");
}
let sayhi = func;
func();
sayhi();

// 1

function ask(question, yes, no) {
    if(confirm(question)){
        yes();
    }else{
        no();
    }
}

function showok(){
    alert("u agreed");
}
function showcancel(){
    alert("u canceled");
}
ask("do u agree?", showok, showcancel);


// 2

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}


// 3


let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now


// 4