var element = document.getElementById("logo-holder");
var duration = 11000;
var hidtime = 10000;
var showtime = 30000;

function SetOpa(Opa) {
    element.style.opacity = Opa;
    element.style.filter = 'alpha(opacity=' + (Opa * 100) + ');';
}

function FadeIn() {
    for (i = 0; i <= 1; i += 0.01) {
        setTimeout("SetOpa(" + i + ")", i * duration);
    }
    setTimeout(duration + showtime);
}