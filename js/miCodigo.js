var amigos = []; //creamos un array donde guardar los nombres
var amigosDesordenados; //creamos un array donde guardar los nombres
nombre.focus(); //ponemos el foco en el input
const btnIntroducir = document.getElementById("btnIntroducir");
btnIntroducir.disabled = true // desactivamos el boton
btnIntroducir.addEventListener("click", function () {
     // escuchamos el boton y realizamos funcion para es evento
   var nombre = document.querySelector("#nombre");//hacemos referencia al input
   nombre.focus(); //ponemos el foco en el input
   
   if (nombre.value === "" && nombre.value === " ") {
      btnIntroducir.disabled =false
   }else if (nombre.value != "" && nombre.value != " ") {
      btnIntroducir.disabled =true
      
   } else {
      btnIntroducir.disabled =true
      
   }
   amigos.push(nombre.value);
   
      //Ahora visualizamos en pantalla lista ordenada de los nombres
   var contenido = nombre.value;
   var li = document.createElement("li");   
   var p = document.createElement("p");
   p.appendChild(document.createTextNode(contenido));
   document.querySelector("#lista").appendChild(li).appendChild(p);  
   nombre.value = " "
   
})
  /* document.getElementById("nombre")
    nombre.addEventListener("keyup", function(e) {
        if (e.code === 'Enter') {
            document.getElementById("btnIntroducir").click();
        }
    }); Codigo comentado,porque no funciona bien en la versión movil */ 

     //funcion para activar el evento producido en el input 
function activar() {
   btnIntroducir.disabled = false
}  

     //hacemos referencia al boton de Parejas y creamos un evento al escuchar el boton  
     var arrayResultado = []; 
const btnParejas = document.getElementById("btnParejas");
btnParejas.addEventListener("click", function () {
      //Tenemos el array amigos con todos los nombres,ahora con el metodo sort y una funcion de comparacion aleatoria desordenamos el array amigos
     amigosDesordenados = amigos.sort(() => Math.random() - 0.5);
       // creamos un numero aleatorio entre 1 y 3 para crear un patron de saltos dentro del array
    var aleatorio = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    for (let index = 0; index < amigos.length; index++) {
       var numeroAleatorio = index + aleatorio
     if (numeroAleatorio > amigos.length -1) {
        console.log(numeroAleatorio);
      numeroAleatorio = numeroAleatorio - (amigos.length -1)
     }
        var contenido =amigosDesordenados[index] +" regala a " + amigosDesordenados[numeroAleatorio];
       var li1 = document.createElement("li");
       var p1 = document.createElement("p");
       p1.appendChild(document.createTextNode(contenido));
       document.querySelector("#listaNombres").appendChild(li1).appendChild(p1);        
       arrayResultado.push(contenido);
      }  
   
        btnParejas.disabled = true;
})
const btnReinicio = document.getElementById("btnReinicio");
btnReinicio.addEventListener("click",function() {
   location.reload();
} )

       var ls = window.localStorage;
       var array = []
        //Hacemos referencia al boton guardar y escuchamos el evento para guardar lista
const btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", function(){
   var nombreClave = document.querySelector("#nombreClave");
   array = amigos.concat(arrayResultado);
   console.log(array);
   ls.setItem(nombreClave.value, array)
})
var listaGuardada
var arrayResultado
//Hacemos referencia al boton mostrar y escuchamos el evento para mostrar lista
const btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", function(){
   var nombreClave = document.querySelector("#nombreClave");
   listaGuardada = ls.getItem(nombreClave.value).split(",");
   console.log(listaGuardada);
   for (let index = 0; index < (listaGuardada.length / 2) ; index++) {
      
      var li = document.createElement("li");
      var p = document.createElement("p");
      var contenido = listaGuardada[index];
      p.appendChild(document.createTextNode(contenido));
      document.querySelector("#lista").appendChild(li).appendChild(p);        
      arrayResultado.push(contenido);
      
   }
   for (let index = listaGuardada.length / 2; index < listaGuardada.length ; index++) {
      
      var li1 = document.createElement("li");
      var p1 = document.createElement("p");
      var contenido3 = listaGuardada[index];
      p1.appendChild(document.createTextNode(contenido3));
      document.querySelector("#listaNombres").appendChild(li1).appendChild(p1);        
      arrayResultado.push(contenido3);
      
   }

})
//Para generar lista de listas guardadas
for (let index = 0; index < Object.keys(ls).length; index++) {
   
   var li2 = document.createElement("li");
   var p2 = document.createElement("p");
   var contenido3 = Object.keys(ls)[index]
   p2.appendChild(document.createTextNode(contenido3));
   document.querySelector("#lista2").appendChild(li2).appendChild(p2);        
}
const btnBorrarNombre = document.getElementById("btnBorrarNombre");
btnBorrarNombre.addEventListener("click", function(){
   var nombreClave = document.querySelector("#nombreClave");
   ls.removeItem(nombreClave.value);
   location.reload();
});