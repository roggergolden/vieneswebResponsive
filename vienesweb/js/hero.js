document.addEventListener('DOMContentLoaded', function() {
    const comprarBtn = document.getElementById('comprar');
    const alquilarBtn = document.getElementById('alquilar');

    comprarBtn.addEventListener('click', function() {
        comprarBtn.classList.add('active');
        alquilarBtn.classList.remove('active');
    });

    alquilarBtn.addEventListener('click', function() {
        alquilarBtn.classList.add('active');
        comprarBtn.classList.remove('active');
    });
});
