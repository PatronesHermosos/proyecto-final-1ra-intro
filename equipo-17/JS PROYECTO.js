var boton= 
document.getElementById('botoncito')

var text=
document.getElementById('nombre_txt')

var congrats=
document.getElementById('¡Felicidades! Has podido expresarte con nosotros')

boton.addEventListener("click",clickeando)
function clickeando(){
  var n=congrats.value;
  alert(n)
}

