// Efectos de scroll suave para navegación
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efecto de parallax para las estrellas
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const stars = document.querySelector('.stars');
        const stars2 = document.querySelector('.stars2');
        const stars3 = document.querySelector('.stars3');
        
        if (stars) stars.style.transform = `translateY(${scrolled * 0.5}px)`;
        if (stars2) stars2.style.transform = `translateY(${scrolled * 0.3}px)`;
        if (stars3) stars3.style.transform = `translateY(${scrolled * 0.7}px)`;
    });

    // Animación de aparición de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.feature-card, .download-card, .roadmap-item, .support-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Efecto de hover para las tarjetas
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efecto de click para botones de descarga
    const downloadButtons = document.querySelectorAll('.btn-download');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Efecto de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Mostrar mensaje de descarga
            showDownloadMessage(this.textContent.trim());
        });
    });

    // Mensaje de descarga
    function showDownloadMessage(version) {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.innerHTML = `
            <div class="message-content">
                <i class="fas fa-check-circle"></i>
                <h4>¡Descarga iniciada!</h4>
                <p>${version} se está descargando...</p>
            </div>
        `;

        const messageStyles = `
            .success-message {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--success-color);
                color: black;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
                z-index: 10001;
                transform: translateX(400px);
                transition: transform 0.3s ease;
            }
            .success-message.show {
                transform: translateX(0);
            }
            .message-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .message-content i {
                font-size: 1.5rem;
            }
            .message-content h4 {
                margin: 0;
                font-size: 1rem;
            }
            .message-content p {
                margin: 0;
                font-size: 0.9rem;
                opacity: 0.8;
            }
        `;

        if (!document.querySelector('#message-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'message-styles';
            styleSheet.textContent = messageStyles;
            document.head.appendChild(styleSheet);
        }

        document.body.appendChild(message);
        
        setTimeout(() => {
            message.classList.add('show');
        }, 100);

        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 3000);
    }

    // Efecto de hover para el preview del editor
    const editorPreview = document.querySelector('.editor-preview');
    if (editorPreview) {
        editorPreview.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02) rotateY(5deg)';
            this.style.boxShadow = '0 20px 60px rgba(0, 212, 255, 0.4)';
        });
        
        editorPreview.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        });
    }

    // Efecto de scroll para el header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Añadir transición al header
    header.style.transition = 'transform 0.3s ease';

    // Funcionalidad de la galería
    initGallery();
});

// Funcionalidad de la galería
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    // Crear modal para las imágenes
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img class="modal-image" src="" alt="">
            <div class="modal-caption">
                <h3></h3>
                <p></p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector('.modal-image');
    const modalCaption = modal.querySelector('.modal-caption h3');
    const modalDescription = modal.querySelector('.modal-caption p');
    const modalClose = modal.querySelector('.modal-close');

    // Mostrar modal al hacer clic en una imagen
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const caption = item.querySelector('.gallery-caption h3').textContent;
            const description = item.querySelector('.gallery-caption p').textContent;
            
            // Aquí puedes reemplazar con las URLs reales de tus imágenes
            const imageUrls = [
                'path/to/image1.jpg',
                'path/to/image2.jpg',
                'path/to/image3.jpg',
                'path/to/image4.jpg',
                'path/to/image5.jpg',
                'path/to/image6.jpg'
            ];

            // Por ahora usamos un placeholder
            modalImage.src = `https://via.placeholder.com/800x600/00d4ff/ffffff?text=${encodeURIComponent(caption)}`;
            modalCaption.textContent = caption;
            modalDescription.textContent = description;
            
            modal.classList.add('show');
            currentSlide = index;
            updateDots();
        });
    });

    // Cerrar modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

    // Navegación con botones
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + galleryItems.length) % galleryItems.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % galleryItems.length;
            showSlide(currentSlide);
        });
    }

    // Navegación con dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Función para mostrar slide específico
    function showSlide(index) {
        // Aquí puedes implementar la lógica para mostrar diferentes imágenes
        // Por ahora solo actualizamos los dots
        updateDots();
        
        // Si el modal está abierto, actualizar la imagen
        if (modal.classList.contains('show')) {
            const item = galleryItems[index];
            const caption = item.querySelector('.gallery-caption h3').textContent;
            const description = item.querySelector('.gallery-caption p').textContent;
            
            modalImage.src = `https://via.placeholder.com/800x600/00d4ff/ffffff?text=${encodeURIComponent(caption)}`;
            modalCaption.textContent = caption;
            modalDescription.textContent = description;
        }
    }

    // Actualizar dots activos
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('show')) {
            if (e.key === 'Escape') {
                modal.classList.remove('show');
            } else if (e.key === 'ArrowLeft') {
                currentSlide = (currentSlide - 1 + galleryItems.length) % galleryItems.length;
                showSlide(currentSlide);
            } else if (e.key === 'ArrowRight') {
                currentSlide = (currentSlide + 1) % galleryItems.length;
                showSlide(currentSlide);
            }
        }
    });

    // Auto-play opcional (descomenta si quieres que la galería cambie automáticamente)
    /*
    setInterval(() => {
        currentSlide = (currentSlide + 1) % galleryItems.length;
        showSlide(currentSlide);
    }, 5000);
    */
}
