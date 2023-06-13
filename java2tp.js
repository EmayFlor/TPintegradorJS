const precio=200, porcentaje1=80, porcentaje2=50, porcentaje3=15;
var resultado;

function guardar (){
    var nombre=document.getElementById("identificador1").value;
    console.log(nombre);
    var apellido=document.getElementById("identificador2").value;
    console.log(apellido);
    var mail=document.getElementById("identificador3").value;
    console.log(mail);
}

const cant2 = document.getElementById("input1");
const elect = document.getElementById("lev");
var a = document.getElementById("1");
var b = document.getElementById("2");
var c = document.getElementById("3");

function guardar2()
    if (elect==a) {
        resultado = precio*cant2*porcentaje1/100;   
}       else {
            resultado = precio*cant2*porcentaje2/100;  
    }
    console.log(resultado);
