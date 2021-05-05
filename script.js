const container = document.getElementById("container");

const inputFila = document.getElementById("fila");

const inputColumna = document.getElementById("columna");

const btnCrear = document.getElementById("btnCrear");

const colorFondo = document.getElementById("color-fondo");

const colorPixel = document.getElementById("color-pixel");

const lapiz = document.getElementById("lapiz");

const gomaBorrar = document.getElementById("gomaBorrar");

const tamañoPixel = document.getElementById("tamañoPixel");

const mostrarBordes = document.getElementById("mostrarBordes");

let estaPintando = true;

btnCrear.addEventListener("click", function () {
    const cantidadFila = inputFila.value;
    const cantidadColumna = inputColumna.value;
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${cantidadColumna}, 1fr)`;
    for (let i = 0; i < cantidadFila; i++) {
        for (let j = 0; j < cantidadColumna; j++) {

            const nuevoPixel = document.createElement("div");
            nuevoPixel.style.backgroundColor = colorFondo.value;

            nuevoPixel.addEventListener("click", function () {
                if (estaPintando) {
                    nuevoPixel.style.backgroundColor = colorPixel.value;
                } else {
                    nuevoPixel.style.backgroundColor = colorFondo.value
                }
            })

            container.appendChild(nuevoPixel);
        }
    }

});

lapiz.addEventListener('click', () => {
    estaPintando = true
    lapiz.classList.add('botonActivo');
    gomaBorrar.classList.remove('botonActivo')
})

gomaBorrar.addEventListener('click', () => {
    estaPintando = false
    gomaBorrar.classList.add('botonActivo');
    lapiz.classList.remove('botonActivo')
})


tamañoPixel.addEventListener('change', () => {
    const pixeles = document.querySelectorAll('#container div');
    for (let index = 0; index < pixeles.length; index++) {
        pixeles[index].style.width = tamañoPixel.value + 'px';
        pixeles[index].style.height = tamañoPixel.value + 'px';
    }
})

