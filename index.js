var presupuesto;
var valorAgregar;

window.onload = function() {
    presupuesto = prompt("Ingresa tu presupuesto semanal");
    console.log(presupuesto)
}

class itemGasto {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}


var enviar = document.getElementById('enviar');
enviar.addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var cantidad = document.getElementById("cantidad").value;
    var item = new itemGasto(nombre, cantidad);
    presupuesto = presupuesto - (item.cantidad);
    console.log(presupuesto);


    // AGREGAR NUEVO ITEM
    const elemento = document.createElement("div");
    elemento.style.height = "40px"
    elemento.id = "item"
    const name = item.nombre;
    const quantity = item.cantidad;
    elemento.innerHTML = `
        <h4 class="d-inline float-left"> ${name} </h4>
        <button type="button" name="delete" class="btn btn-danger d-inline btn-sm float-right"> Borrar </button>
        <span class="badge badge-primary float-right mt-2 mr-3">${quantity} </span>
        `

    // IMPRIMIR PRESUPUESTO RESTANTE
    const restante = document.getElementById("restante");
    restante.innerHTML = ` 
            <div class="p-3 mb-2 bg-primary text-white">RESTANTE
            <span class="badge badge-primary"> ${presupuesto}</span>;
            </div>
    `

    document.getElementById('lista').appendChild(elemento);

    // MOSTRAR MENSAJE DE CONFIRMACION
    const elemento2 = document.createElement("div");
    elemento2.className = 'alert alert-success';
    elemento2.textContent = "Gasto agregado con exito";
    let padre = document.getElementById("card1cuerpo");
    let nodo = document.getElementById("formulario");
    padre.insertBefore(elemento2, nodo);
    setTimeout(function() {
        elemento2.remove();
    }, 1000)
})


// QUITAR UN ITEM DE LA LISTA
const element = document.getElementById("lista");
element.addEventListener("click", function(e) {
    if (e.target.name === "delete") {
        var hijos = e.target.parentElement.children;
        valorAgregar = parseInt(hijos[2].textContent);
        presupuesto = presupuesto + valorAgregar;
        console.log(presupuesto)

        const restante = document.getElementById("restante");
        restante.innerHTML = ` 
           <div class="p-3 mb-2 bg-primary text-white">RESTANTE
           <span class="badge badge-primary"> ${presupuesto}</span>;
           </div>
   `
        e.target.parentElement.remove();
        //MENSAJE DE ELIMIMNACION
        const elemento = document.createElement("div");
        elemento.className = "alert alert-danger";
        elemento.textContent = "Elemento quitado satisfactoriamente";
        let padre = document.getElementById("card2cuerpo");
        let nodo = document.getElementById("lista");
        padre.insertBefore(elemento, nodo);
        setTimeout(function() {
            elemento.remove();
        }, 1000)
    }
})