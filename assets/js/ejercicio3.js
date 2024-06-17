
let vglobal;

function cambiarColor(color) {
    const keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = color;
}

function presionartecla(event) {
    const key = event.key.toLowerCase();

    if (key === 'a' || key === 'A' ) {
        vglobal = 'pink';
        cambiarColor(vglobal);
    } else if (key === 's' || key === 'S') {
        vglobal= 'orange';
        cambiarColor(vglobal);
    } else if (key === 'd' || key === 'D') {
        vglobal = 'lightblue';
        cambiarColor(vglobal);
    } else if (key === 'q' || key === 'Q') {
        vglobal = 'purple';
        crearNuevoDiv(vglobal);
    } else if (key === 'w' || key === 'W') {
        vglobal = 'gray';
        crearNuevoDiv(vglobal);
    } else if (key === 'e' || key === 'E') {
        vglobal = 'brown';
        crearNuevoDiv(vglobal);
    }
}

document.addEventListener('keydown', presionartecla);

function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '1px solid black';
    document.body.appendChild(nuevoDiv);
}


