for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    callAudio(this.innerHTML);

    pressedKeyAnimation(this.innerHTML);

    this.style.color = "white";
  });
};

document.addEventListener("keydown", function (event) {
  
  callAudio(event.key); 

  pressedKeyAnimation(event.key);

})

function callAudio(i) {
  switch (i) {
    case 'w': (new Audio("sounds/tom-1.mp3")).play();break;
    case 'a': (new Audio("sounds/tom-2.mp3")).play();break;
    case 's': (new Audio("sounds/tom-3.mp3")).play();break;
    case 'd': (new Audio("sounds/tom-4.mp3")).play();break;
    case 'j': (new Audio("sounds/crash.mp3")).play();break;
    case 'k': (new Audio("sounds/kick-bass.mp3")).play(); break;
    case 'l': (new Audio("sounds/snare.mp3")).play();break;
  }
}

function pressedKeyAnimation(key)
{
  var pressedButton = document.querySelector("." + key);
  pressedButton.classList.add("pressed");
  setTimeout(function () {
    pressedButton.classList.remove("pressed");
  }, 100);
}