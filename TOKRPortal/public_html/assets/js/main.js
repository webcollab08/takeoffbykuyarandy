var i = 0;
var txt = 'Mahal na mahal kita, Mko. ❤️❤️❤️❤️❤️❤️❤️❤️'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();