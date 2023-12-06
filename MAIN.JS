//Bienvenidos/as al programa ENDEUDA2//

let continuar =true;

while(continuar){

    let Nombre = prompt("Ingrese su nombre");

alert("Bienvenido/a al programa ENDEUDA2: " + Nombre);

let Monto = Number(prompt("Ingrese su Monto: "));

if(Monto <=1000){

    alert("No se puede hacer en cuotas el Valor debe ser mayor a 1000");
    
}

else{
    let resultado3 = Monto / 3;
    let resultado6 = Monto / 6;
    let resultado12 = Monto /12;

    alert("Su monto en 3 cuotas es: " + resultado3);
    alert("Su monto en 6 cuotas es: " + resultado6); 
    alert("Su monto en 12 cuotas es: " + resultado12);
}
}