window.addEventListener('load', function(e) {
    
    // Posicionamiento de la ventana con información del proyecto.
    const botonInfo = document.querySelector('#titular');

    botonInfo.addEventListener('click', () => {
        const info = document.querySelector('#info');
        info.classList.toggle('activo');
    });

});