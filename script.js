console.log("Hello from the JavaScript file");

document.getElementById('header').style.color = "#00adef";
document.getElementById('header').style.fontSize = "80px";
document.getElementById('header').style.backgroundColor = "#f8ed31"

function appendDiv(arg1) {
  var divElement = document.createElement("div");
  divElement.innerHTML = arg1;
  document.body.appendChild(divElement);
}

function appendItems(arg1) {
  for (var i = 0; i < someArray.length; i++) {
    appendDiv(someArray[i]);
  }
}
var someArray = [1,2,3,4];

appendItems(someArray);
