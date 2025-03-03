
    var galeriaEl;
    var btnTemaClaro;
    var btnTemaOscuro;
    var btnReset;
    var botones;

    function aplicarTemaClaro() {
        galeriaEl.removeAttribute('style');
        galeriaEl.className = 'tema-claro';
        quitarResaltadoBotones();
        btnTemaClaro.classList.add('botonActivo');
    }

    function aplicarTemaOscuro() {
        galeriaEl.className = '';
        galeriaEl.style.backgroundColor = '#343a40';
        galeriaEl.style.padding = '15px';
        galeriaEl.style.border = '2px solid #096a00';
        galeriaEl.style.borderRadius = '15px';
        galeriaEl.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
        galeriaEl.style.color = '#f8f9fa';
        galeriaEl.style.display = 'flex';
        galeriaEl.style.flexWrap = 'wrap';
        galeriaEl.style.justifyContent = 'space-around';
        galeriaEl.style.gap = '20px';
        quitarResaltadoBotones();
        btnTemaOscuro.classList.add('botonActivo');
    }

    function restablecerEstilos() {
        galeriaEl.className = '';
        galeriaEl.removeAttribute('style');
        quitarResaltadoBotones();
        btnReset.classList.add('botonActivo');
        setTimeout(() => {
            btnReset.classList.remove('botonActivo');
        }, 500);
    }

    function quitarResaltadoBotones() {
        botones.forEach(boton => {
            boton.classList.remove('botonActivo');
        });
    }

    function inicializaReferencias() {
        galeriaEl = document.getElementById('galeria');
        btnTemaClaro = document.getElementById('temaClaro');
        btnTemaOscuro = document.getElementById('temaOscuro');
        btnReset = document.getElementById('resetear-estilos');
        botones = document.querySelectorAll('button');

        // Eventos para los botones
        btnTemaClaro.addEventListener('click', aplicarTemaClaro);
        btnTemaOscuro.addEventListener('click', aplicarTemaOscuro);
        btnReset.addEventListener('click', restablecerEstilos);

        botones.forEach(boton => {
            boton.addEventListener('mouseenter', function() {
                if (!this.classList.contains('botonActivo')) {
                    this.classList.add('botonActivo');
                    this.dataset.temporal = 'true';
                }
            });

            boton.addEventListener('mouseleave', function() {
                if (this.dataset.temporal === 'true') {
                    this.classList.remove('botonActivo');
                    this.dataset.temporal = 'false';
                }
            });
        });
    }
    inicializaReferencias();
    restablecerEstilos();