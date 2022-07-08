for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function () {

    var buttonListener = this.innerHTML;

makesound(buttonListener);

buttonAnimation(buttonListener);

  });



  document.addEventListener("keydown" , function (event){
    makesound(event.key);

    buttonAnimation(event.key);
  })

}


function makesound(key) {
    

  switch (key) {
    case "w":
      var tom1 = new Audio('C:/Users/mirsa/web deveopement/Drum Kit Starting Files/sounds/tom-1.mp3');
      tom1.play();
      break;
  
      case "a":
        var tom2 = new Audio('C:/Users/mirsa/web deveopement/Drum Kit Starting Files/sounds/tom-2.mp3');
        tom2.play();
        break;
  
        case "s":
          var tom3 = new Audio('C:/Users/mirsa/web deveopement/Drum Kit Starting Files/sounds/tom-3.mp3');
          tom3.play();
          break;
  
          case "d":
            var tom4 = new Audio('C:/Users/mirsa/web deveopement/Drum Kit Starting Files/sounds/tom-4.mp3');
            tom4.play();
            break;
  
            case "j":
              var crash = new Audio('C:/Users/mirsa/web deveopement/Drum Kit Starting Files/sounds/crash.mp3');
              crash.play();
              break;
  
              case "k":
                var kickbass = new Audio('C:/Users/mirsa/web deveopement/Drum Kit Starting Files/sounds/kick-bass.mp3');
                kickbass.play();
                break;
  
                case "l":
                  var snare = new Audio('C:/Users/mirsa/web deveopement/Drum Kit Starting Files/sounds/snare.mp3');
                  snare.play();
                  break;
  
                                            
    default:
      console.log(key);
      
  }
  
    }






function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed");

setTimeout(function(){

  activeButton.classList.remove("pressed") , 200
});

}


















// var audio = new Audio(
//   "C:/Users/mirsa/web deveopement/Drum Kit Starting Files/sounds/tom-1.mp3"
// );
// audio.play();