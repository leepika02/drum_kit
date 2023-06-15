for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var button_clicked = this.innerHTML;
    makesound(button_clicked);
    button_pressed(button_clicked);
  });
}

document.addEventListener("keypress",function(event){
  makesound(event.key);
  button_pressed(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    default:
      console.log("error");

  }
}

function button_pressed(button_key)
{
  document.querySelector("."+ button_key).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+ button_key).classList.remove("pressed");},400);
}
