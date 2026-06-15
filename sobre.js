function openEnvelope() {
    const envelope = document.getElementById("envelopeWrapper");

    if (!envelope) return;

    // Evita múltiples clics
    if (envelope.classList.contains("open")) return;

    // Abre el sobre
    envelope.classList.add("open");

    // Indicador para que invitacion.html reproduzca música
    sessionStorage.setItem("playMusic", "true");

    // Redirección después de la animación
    setTimeout(() => {
        window.location.href = "invitacion.html";
    }, 3000);
}
