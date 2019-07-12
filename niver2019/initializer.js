window.onload = function() {
  $("body").removeClass("preload");
}

function sair(){
  $('body').fadeOut(800, goBack);
}

function goBack(){
  window.location="../index.html";
}
