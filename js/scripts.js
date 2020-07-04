window.addEventListener('load', function(e) {
    const botonInfo = document.querySelector('#boton-info');
    botonInfo.addEventListener('click', () => {
        const info = document.querySelector('#info');
        if (info.style.opacity == '1') {
            info.style.opacity = '0';
        } else {
            info.style.opacity = '1';
        }
    });
});