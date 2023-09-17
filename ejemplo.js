//Funcion que se encarga de comprobar el rango de edad del usuario
function fun(){

var edad = document.getElementById("entrada1").value;

// condicional if para comprobar la fecha de nacimiento ingresada
if(edad>=1968 && edad<=2005){

var yay= document.getElementById("Requirement")
yay.innerHTML = `<h3> La fecha de nacimiento:" ${edad}"entra del rango dado, sí cumple</h3> `;

}

else{
    var nocumple= document.getElementById("NOO")
    nocumple.innerHTML= `<h3> La fecha de nacimiento:" ${edad}" no entra del rango dado, no cumple</h3>`
    
    
}




}







 

