// Configura la fecha objetivo aquí
const eventDate = new Date("June 20, 2026 20:00:00").getTime();

const updateTimer = setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    // Si la fecha ya pasó
    if (diff <= 0) {
        clearInterval(updateTimer);
        document.getElementById("timer").innerHTML = "¡Es hoy!";
        return;
    }

    // Cálculos de tiempo
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    // Actualizar el HTML (con ceros a la izquierda si es < 10)
    document.getElementById("days").innerText = d < 10 ? '0' + d : d;
    document.getElementById("hours").innerText = h < 10 ? '0' + h : h;
    document.getElementById("minutes").innerText = m < 10 ? '0' + m : m;
    document.getElementById("seconds").innerText = s < 10 ? '0' + s : s;

}, 1000);
function openEnvelope() {
    const envelope = document.getElementById('envelopeWrapper');
    envelope.classList.toggle('open');
}
// Animación de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});
