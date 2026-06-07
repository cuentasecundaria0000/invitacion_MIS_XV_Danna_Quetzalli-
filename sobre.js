function openEnvelope() {
    const envelope = document.getElementById("envelopeWrapper");
    const audio = document.getElementById("backgroundMusic");

    // Evita múltiples clics
    if (envelope.classList.contains("open")) return;

    // Abre el sobre
    envelope.classList.add("open");

    // Reproducir música
    audio.play();

    // Redirección después de la animación
    setTimeout(() => {
        window.location.href = "invitacion.html";
    }, 7000); // ajusta al tiempo de tu animación
}
function openEnvelope() {
    const envelope = document.getElementById("envelopeWrapper");

    // Evita múltiples clics
    if (envelope.classList.contains("open")) return;

    // Abrir sobre
    envelope.classList.add("open");

    // Redirigir (SIN audio aquí)
    setTimeout(() => {
        window.location.href = "invitacion.html";
    }, 2200);
}
