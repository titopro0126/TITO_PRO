/*!
 * J.R-Estudio - Scripts comunes
 * Copyright 2026 TITO PRO
 */

function copyLink(url) {
    const fullUrl = window.location.origin + '/' + url;
    navigator.clipboard.writeText(fullUrl).then(() => {
        showToast('¡Enlace copiado al portapapeles!');
    }).catch(() => {
        const input = document.createElement('input');
        input.value = fullUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast('¡Enlace copiado al portapapeles!');
    });
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast-notification';
        toast.innerHTML = `
            <i class="bi bi-check-circle"></i>
            <span class="toast-text"></span>
        `;
        document.body.appendChild(toast);
    }
    toast.querySelector('.toast-text').textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.getElementById('navbarToggler');
    const collapse = document.getElementById('navbarCollapse');
    
    if (toggler && collapse) {
        toggler.addEventListener('click', function() {
            collapse.classList.toggle('show');
        });
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    if (e.key === "F12" || 
        (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "c" || e.key === "i")) || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C"))) {
        return false;
    }
};

document.addEventListener('selectstart', function(e) {
    if (e.target.closest('.no-select')) {
        e.preventDefault();
    }
});