window.addEventListener('load', function(e) {
    
    // Posicionamiento de la ventana con información del proyecto.
    const botonInfo = document.querySelector('#titular');

    botonInfo.addEventListener('click', () => {

        const info = document.querySelector('#info');

        info.classList.toggle('activo');

    });

    // Funcionalidad para la reproducción de audios.

    const botonIntro = document.querySelector('#dexter-cabeza');

    const frente = document.getElementById('fondo-hawk');

    const botonHawk = document.querySelector('#diskette');

    const intro = document.querySelector('#intro');

    const hawk = document.querySelector('#hawk');
    
    botonIntro.addEventListener('click', (e) => {

        if (hawk.currentTime != 0) {

            hawk.pause();

            hawk.currentTime = 0;

        }

        if (intro.currentTime == 0) {

            intro.play();

        } else {

            intro.pause();

            intro.currentTime = 0;

        }
    });
    
    botonHawk.addEventListener('click', (e) => {

        if (intro.currentTime != 0) {

            intro.pause();

            intro.currentTime = 0;

        }
        if (hawk.currentTime == 0) {

            hawk.play();

            // Animacion del fondo Hawk.
            frente.style.display = 'flex';

            let opacidad = 1;

            let cambio = setInterval((e) => {

                if (opacidad > 0.05) {

                    opacidad -= 0.05;

                    frente.style.opacity = opacidad;

                } else {

                    clearInterval(cambio);

                }

            }, 200);

            setTimeout((e) => {

                frente.style.display = 'none';

            }, 4000);

        } else {

            hawk.pause();

            hawk.currentTime = 0;
            
        }
        
    });

    function terminarAudio(audio) {

        audio.addEventListener('ended', (e) => {

            audio.currentTime = 0
    
        });

    }

    terminarAudio(intro);

    terminarAudio(hawk);

});