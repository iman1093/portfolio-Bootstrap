var i = 0;
var txt = "Hello I'm Iman";
var speed = 150;

function Type() {
  if (i < txt.length) {
    document.getElementById("about").innerHTML += txt.charAt(i);
    i++;
    setTimeout(Type, speed);
  }
}
Type();
  