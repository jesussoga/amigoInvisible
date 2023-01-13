/*
var nombres = ["loli","enrique","diego","jesus","Paco","javi", "gavi"];
var nombreAleatorio = nombres.length-1;
var numeroAleatorio = Math.floor(Math.random() * (nombreAleatorio));
var numeroAleatorio1 = Math.floor(Math.random() * (nombreAleatorio));
var nombreSelcA = nombres[numeroAleatorio];
var nombreSelcB= nombres[numeroAleatorio1];
if (nombreSelcA != nombreSelcB) {
    var res1 = nombreSelcA +" "+nombreSelcB    
}else{
    var res1 = nombreSelcA +" "+nombreSelcB    
    
}
console.log(res1);
*/

/*
/* Muestra un número aleatorio entre max y min y lo mete en un elemento con id dado
/* Sino me pasan variables tomo por defecto 1 y 6
*/
function indiceAleatorio(max, min) { 
    var aleatorio = Math.floor((Math.random() * (max - min + 1)) + min);
    return aleatorio;
 }
 
 /**
  * Devuelve el array de elementos contenidos en el objeto identificado
  * @param {*} identificador 
  * @returns 
  */
 function selectToArray (identificador) {
    var selector = "#" + identificador;  //construyo el selector
    var objeto = document.querySelector(selector);
    return objeto.options;
 }
 
 /**
  * Recibe un array y devuelve un elemento aleatorio del mismo usando la funcion indiceAleatorio
  * @param {*} array 
  * @returns 
  */
 function obtenerTextoAleatorio(array) {
    var indice = indiceAleatorio(array.length - 1, 1);
    return array[indice];
 }
 /**
  * OPCIONAL para cargar imagen aleatoria 
  * LA IMAGEN CAMBIA PERO TIENES QUE ESPERAR TIEMPO...
  */
  function imagenAleatoria(){
    var imagen = document.querySelector("#imgPelicula");
    //tomo la id de la foto de 1 a 1000 para coger el rango de fotos existentes en la web
    var url = "https://picsum.photos/id/" + indiceAleatorio(1000, 1) + "/300/200";
    imagen.removeAttribute("src");
    imagen.src = url;
 }
 
 
 /* CÓDIGO PRINCIPAL */
 function generarTitulo() {
    var selectPrimeraParte = document.querySelector("#selPrimeraParte");
    var selectSegundaParte = document.querySelector("#selSegundaParte");
    var selectTerceraParte = document.querySelector("#selTerceraParte");
    var titulo = document.querySelector("#titulo");
 
    //actualiza la imagen
    imagenAleatoria();
 
    //primer select
    var primeraParte = selectToArray("selPrimeraParte"); //traigo el array
    var objeto1 = obtenerTextoAleatorio(primeraParte); //guardo el objeto completo
    var texto1 = objeto1.innerHTML; //recojo el texto
    selectPrimeraParte.selectedIndex = objeto1.value; //marco su opción en el select
 
 
    //decido si uso o no el segundo select
    var siNo = indiceAleatorio(1, 0);
    if(siNo == 1) {
       var segundaParte = selectToArray("selSegundaParte"); //traigo el array
       var objeto2 = obtenerTextoAleatorio(segundaParte); //guardo el objeto completo
       var texto2 = " " + objeto2.innerHTML + " ";
       selectSegundaParte.selectedIndex = objeto2.value;
       selectSegundaParte.removeAttribute("disabled"); //si lo uso lo habilito
    } else {
       var texto2 = " ";
       selectSegundaParte.selectedIndex = "0";
       selectSegundaParte.setAttribute("disabled", "disabled"); //sino lo uso lo deshabilito
    }
    
    //tercer select
    var terceraParte = selectToArray("selTerceraParte"); //traigo el array
    var objeto3 = obtenerTextoAleatorio(terceraParte); //guardo el objeto completo
    var texto3 = objeto3.innerHTML;
    selectTerceraParte.selectedIndex = objeto3.value;
 
    //relleno el título
    titulo.innerHTML = texto1 +  texto2 + texto3;
 } 