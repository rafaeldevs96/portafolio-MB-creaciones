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




document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("close-modal");

  if (!modal || !modalImg || !closeBtn) {
    console.error('Modal elements not found. Check that #image-modal and children exist in HTML.');
    return;
  }

  document.querySelectorAll(".img-arreglos").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      // usa data-src si quieres una imagen más grande: img.dataset.full
      modalImg.src = img.src;
      // opcional: para accesibilidad
      modalImg.alt = img.alt || '';
    });
  });

  // Cerrar al tocar la X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = ""; // limpia el src (opcional)
  });

  // Cerrar al tocar fuera de la imagen
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });

  // cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      modalImg.src = '';
    }
  });
});