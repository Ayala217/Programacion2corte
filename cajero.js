// Creacion de la variable que guarda la clave
var clave;
clave= 1234;
//Creacion de la funcion que evaluara si la clave es correcta o no
function num(){
    var i = document.getElementById("pass").value
    if(i == clave){
        // caso en el que la clave es correcta
        mono = prompt("Clave correcta, ingrese el monto a retirar")
        if( mono<0){
            document.write("Ingrese un valor valido")
            
        }
        else{
            document.write("\n"+"\t"+" Su cantidad retirada fue:" +mono+ "  Operacion exitosa, puede retirarse")
        }     
    }
    // caso en el que la clave es incorrecta
    else{
        var i 
        var b
        var c
for (i=0;i<=2;i++) { 
   	b =prompt("Clave incorrecta, Ingrese la clave")
    if(b == 1234){
        c =prompt("Clave correcta, ingrese el monto a retirar")
        document.write("Operacion exitosa"+"  ,cantidad retirada="+ c)
   
break
    }
if(i == 2){
    document.write("Ha excedido la cantidad de intentos")
    break
}
}
    }
}

