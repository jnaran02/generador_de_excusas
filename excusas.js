let quien = ["A Jose","Mi jefe","Mi perro","Un compañero","Un Conductor","Mi vecino"];
let que = ["tenia diarrea","se murio","escuchaba rock a todo volumèn","se emborrachó","se suicidó", "se llevo mi tarea"];
let cuando = ["el martes", "antes de ayer", "anoche", "mientras almorzaba", "al salir del trabajo","antes de dormir"];

function aleatorio() {
    
    var numero = Math.floor((Math.random() * (6-1))+1);
  
return numero;
};

function concatenar() {
     var excusa = {
        indice: aleatorio(),
        indice2:  aleatorio(),
        indice3:  aleatorio(),
     };

     var cuento = quien[excusa.indice]+" "+que[excusa.indice2]+" "+cuando[excusa.indice3];
     
     document.getElementById('resultado').innerHTML = cuento;
}




