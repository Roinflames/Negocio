/*
Este es un comentario multilínea.
ejercicio 1
pricesArray contiene un arreglo retornado por getElementByClassName, método del objeto document.
El método retorna todos los elementos del DOM que pertenezcan a la clase price.
El mostrar el index de cada plant iwui, nos muestra el órden en que se cargan los elementos y sus atributos.

ejercicio 2
Creación de clase Plantiwui para elemento tienda-item, 
se itera sobre sus elementos children,
se modifican y obtienen valores de clase Plantiwuis con setters y getters,
Se insertan valores en elementos html modificando atributo innerHTML
 */

// ejercicio 2
class Plantiwui {
    constructor(url, nombre, detalle, precio) {
        this.url = url;
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
    }

    setValores(url, nombre, detalle, precio) {
        this.url = url;
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
    }//setValores
    getNombre() {
        return this.nombre;
    }
    getdetalle() {
        return this.detalle;
    }
    getprecio() {
        return this.precio;
    }
    getAll() {
        fetch('./assets/js/data.json')
            .then((response) => response.json())
            .then((json) => {return});
    }
}

tiendaitem = (document.getElementsByClassName("tienda-item"))

const plantiwui = new Plantiwui();
plantiwui.getAll()

for (let index = 0; index < tiendaitem.length; index++) {
    plantiwui.setValores(
        tiendaitem[index].children[0].innerHTML + index,
        tiendaitem[index].children[1].innerHTML + index,
        tiendaitem[index].children[2].innerHTML + index,
        tiendaitem[index].children[3].innerHTML + index
    );
    tiendaitem[index].children[1].innerHTML = plantiwui.getNombre()
    tiendaitem[index].children[2].innerHTML = plantiwui.getdetalle()
    tiendaitem[index].children[3].innerHTML = plantiwui.getprecio()
}

// ejercicio 1
// pricesArray = document.getElementsByClassName("price")
// console.log(pricesArray);

// for (let index = 0; index < pricesArray.length; index++) {
//     const element = pricesArray[index];
//     element.innerHTML = "Precio con índice de arreglo número " + index;
// }