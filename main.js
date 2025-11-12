// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener los elementos clave del DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-nav-menu'); // El menú que quieres mostrar
    const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : []; // ¡NUEVO! Obtiene todos los enlaces dentro del menú
    const body = document.body; // Para evitar el scroll cuando el menú está abierto

    // 2. Definir la función que maneja el clic (ABRIR/CERRAR)
    function toggleMenu() {
        // Alterna la clase 'active' en el botón
        menuToggle.classList.toggle('active');
        
        // Alterna la clase 'open' en el menú (para mostrarlo/ocultarlo con CSS)
        mobileMenu.classList.toggle('open');
        
        // Alterna la clase 'menu-open' en el <body> (para controlar el scroll)
        body.classList.toggle('menu-open');

        // Actualiza el atributo ARIA para accesibilidad
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    }

    // 3. Añadir el escuchador de eventos al botón principal (para abrir/cerrar)
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', toggleMenu);

        // 4. ¡NUEVO! Añadir escuchador de eventos a cada enlace dentro del menú
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Llama a la misma función para cerrar el menú
                if (mobileMenu.classList.contains('open')) {
                    toggleMenu(); 
                }
            });
        });
    }
});