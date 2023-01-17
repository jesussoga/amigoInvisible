var lista = []; //creamos un array fuera de la llamada para guardar los cambios
var listaAmigos = []
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
   lista.push(nombre.value);
   
   //generamos lista ordenada de los nombres
   var contenido = nombre.value;
   var li1 = document.createElement("li");   
   var p1 = document.createElement("p");
   p1.appendChild(document.createTextNode(contenido));
   document.querySelector("#lista").appendChild(li1).appendChild(p1);  
   nombre.value = " "
})
//Para poder hacer intro en el input
document.getElementById("nombre")
.addEventListener("keyup", function(e) {
    if (e.code === 'Enter') {
        document.getElementById("btnIntroducir").click();
    }
});     

//funcion para activar el evento producido en el input 
function activar() {
   btnIntroducir.disabled = false
}  

  //hacemos referencia al boton de Parejas y creamos un evento al escuchar el boton   
  var arrayResultado = []
  var arrayNumeros = []
  var listaB = [] 
  var listaC = []
const btnParejas = document.getElementById("btnParejas");
btnParejas.addEventListener("click", function () {
   //generamos numeros aleatorios sin que se repitan y los metemos en un array
   
   console.log(lista);
   //hacemos recorrer el array de numeros atraves del array de nombres creando un array de nombres desordenados
   for (let index = 0; index < lista.length ; index++) {  //no es lista.lenght -1
      listaB.push(lista[index])
   }
   listaB.sort(function() {return Math.random() - 0.5});
   console.log(listaB);
   for (let index = 0; index < lista.length ; index++) {  //no es lista.lenght -1
      listaC.push(listaB[index])
   }
   listaC.push(listaB[0]);
   listaC.shift()
   
   console.log(listaC);
       //generamos lista desordenada 
   for (let index = 0; index < lista.length ; index++) {
      
      var li = document.createElement("li");
      var p = document.createElement("p");
      var contenido2 = listaB[index]+ " regala a " + listaC[index];
      p.appendChild(document.createTextNode(contenido2));
      document.querySelector("#listaNombres").appendChild(li).appendChild(p);        
      arrayResultado.push(contenido2);
      
   }
   btnParejas.disabled = true;
   
   
   
   
   
})
const btnReinicio = document.getElementById("btnReinicio");
btnReinicio.addEventListener("click",function() {
   location.reload();
} )

var ls = window.localStorage;
var array = []
//Hacemos referencia al boton guardar y escuchamos el evento
const btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("dblclick", function(){
   var nombreClave = document.querySelector("#nombreClave");
   array = lista.concat(arrayResultado);
   console.log(array);
   ls.setItem(nombreClave.value, array)
})
var listaGuardada;
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
console.log(Object.keys(ls).length); 
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
})
const btnBorrarTodo = document.getElementById("btnBorrarTodo");
btnBorrarTodo.addEventListener("click", function(){
   var nombreClave = document.querySelector("#nombreClave");
   ls.clear();
})