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
// Música en invitacion.html
window.addEventListener("load", () => {
    const music = document.getElementById("backgroundMusic");

    if (music) {
        music.volume = 0.6;

        music.play().catch(() => {
            document.addEventListener("click", () => {
                music.play();
            }, { once: true });
        });
    }
});

// Lógica del sobre
function openEnvelope() {
    const envelope = document.getElementById("envelopeWrapper");

    if (!envelope) return;

    envelope.classList.toggle("open");
}

// Animación de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".timeline-item").forEach(item => {
    observer.observe(item);
});

// Cuenta regresiva
const eventDate = new Date("July 18, 2026 16:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) return;

    document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// Carrusel
const fotos = document.querySelectorAll(".carousel-img");
let inicio = 0;

function actualizarCarrusel() {
    if (fotos.length === 0) return;

    fotos.forEach((foto) => {
        foto.className = "carousel-img";
    });

    for (let i = 0; i < fotos.length; i++) {
        let posicion = (i - inicio + fotos.length) % fotos.length;
        fotos[i].classList.add("pos" + posicion);
    }

    inicio = (inicio + 1) % fotos.length;
}

actualizarCarrusel();
setInterval(actualizarCarrusel, 2500);
