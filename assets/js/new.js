/*
Este es un comentario multilínea.
pricesArray contiene un arreglo retornado por getElementByClassName, método del objeto document.
El método retorna todos los elementos del DOM que pertenezcan a la clase price.
El mostrar el index de cada plantiwui, nos muestra el órden en que se cargan los elementos y sus atributos.
 */
pricesArray = document.getElementsByClassName("price")
console.log(pricesArray);

for (let index = 0; index < pricesArray.length; index++) {
    const element = pricesArray[index];
    element.innerHTML = "Precio con índice de arreglo número " + index;
}