
var element = document.getElementById("logo-holder");
var duration = 10000;
var hidtime = 1000; 
var showtime = 30000; 

function SetOpa(Opa) {
  element.style.opacity = Opa;
  element.style.filter = 'alpha(opacity=' + (Opa * 100) + ');';
}

function fadeOut() {
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + (1 - i) +")", i * duration);
  }
   setTimeout("FadeIn()", (duration + hidtime));
}
function FadeIn() {
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + i +")", i * duration);
  }
   setTimeout("fadeOut()", (duration + showtime));
}