let quien = ["A Jose","Mi jefe","Mi perro","Un compañero","Un Conductor","Mi vecino"];
let que = ["tenia diarrea","se murio","escuchaba rock a todo volumèn","se emborrachó","se suicidó", "se llevo mi tarea"];
let cuando = ["el martes", "antes de ayer", "anoche", "mientras almorzaba", "al salir del trabajo","antes de dormir"];

function cuentos() {
    
    var numero = Math.floor((Math.random() * (6-1))+1);
  
return numero;
};

function combinar() {
     var excusa = {
        array1: cuentos(),
        array2:  cuentos(),
        array3:  cuentos(),    
     };

     var historia = quien[excusa.array1]+" "+que[excusa.array2]+" "+cuando[excusa.array3];
     
     document.getElementById('resultado').innerHTML = historia;
}




