function change(color) {
document.body.style.backgroundColor = color;
}


var button = document.getElementById("green");
button.onclick = function() {myFunction()};

function myFunction() {
 if (button.id=="green"){
 	change("red");
 	button.id = "red";
  }
  else if (button.id=="red"){
  	change("lightgreen");
  	button.id = "green";
  }
}

