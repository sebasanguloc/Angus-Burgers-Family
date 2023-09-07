let imagenes = [
    'imagenes/sliders/slide-1.jpg',
    'imagenes/sliders/slide-2.jpg',
    'imagenes/sliders/slide-3.jpg',
]

let suma = 0;

document.imagen.src = imagenes[suma];

const derecha = document.querySelector('#derecha');
const izquierda = document.querySelector('#izquierda');

let interval = setInterval(imagenSiguienteNext, 2000); 

derecha.addEventListener('click', () => {
    clearInterval(interval);
    imagenSiguienteNext();
    interval = setInterval(imagenSiguienteNext, 2000);
});

function imagenSiguienteNext() {

    suma++;
    if(suma > imagenes.length - 1) {

        suma = 0; 
    }
    document.imagen.src = imagenes[suma];
}

izquierda.addEventListener('click', () => {
    clearInterval(interval);
    imagenAnteriorBack();
    interval = setInterval(imagenSiguienteNext, 2000);
});

function imagenAnteriorBack() {
    suma--;
    if(suma < 0) {
        suma = imagenes.length - 1;
    }
    document.imagen.src = imagenes[suma];
}


