const toggleBtn = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = toggleBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        feedback.textContent = '';
        feedback.className = 'form-feedback';

        if (!nombre) {
            showError('Por favor ingresa tu nombre.');
            return;
        }

        if (!email) {
            showError('Por favor ingresa tu correo electrónico.');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Ingresa un correo electrónico válido.');
            return;
        }

        if (telefono && !isValidPhone(telefono)) {
            showError('Ingresa un número de teléfono válido (solo dígitos y opcionalmente +).');
            return;
        }

        if (!mensaje) {
            showError('Por favor escribe un mensaje.');
            return;
        }

        if (mensaje.length < 10) {
            showError('El mensaje debe tener al menos 10 caracteres.');
            return;
        }

        feedback.textContent = 'Mensaje enviado con éxito. Te contactaremos pronto.';
        feedback.className = 'form-feedback success';
        form.reset();
    });
}

function showError(msg) {
    feedback.textContent = msg;
    feedback.className = 'form-feedback error';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+?[\d\s\-]{7,15}$/.test(phone);
}
