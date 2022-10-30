var yourName = prompt("what's your name: ");

var firstCapitalLetter = yourName.slice(0,1).toUpperCase();
var restOfName = yourName.slice(1).toLowerCase();

alert(firstCapitalLetter+restOfName)
