function openEnvelope() {
    const wrapper = document.getElementById('envelopeWrapper');
    const body = document.body; // 👈 más seguro que getElementById

    // Evita múltiples clics
    if (wrapper.classList.contains('open')) return;

    // 1. Abrir el sobre
    wrapper.classList.add('open');

    // 2. Esperar animación del sobre
    setTimeout(() => {
        // Desvanecer pantalla
        body.style.transition = "opacity 0.5s ease";
        body.style.opacity = "0";

        // 3. Redirigir
        setTimeout(() => {
            window.location.href = "invitacion.html";
        }, 500);

    }, 2000);
}