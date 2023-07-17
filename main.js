function change(color) {
document.body.style.backgroundColor = color;
}

// function hi(){
// 	if (button.id == 
// }

var button = document.getElementById("green");

// console.log(button);

button.onclick = function() {myFunction()};

function myFunction() {
	change("red");
  // button.innerHTML = "YOU CLICKED ME!";
}

