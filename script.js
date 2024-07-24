const quotes = [
    "El verdadero crecimiento empieza cuando decides salir de tu zona de confort.",
    "Cada desafío es una oportunidad disfrazada de obstáculo.",
    "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
    "La perseverancia convierte los sueños en realidad.",
    "La creatividad no es un don, sino una habilidad que se cultiva con la práctica.",
    "El mayor riesgo es no tomar ninguno.",
    "El éxito no es el destino, sino el viaje.",
    "Tu actitud determina tu altitud.",
    "Cada día es una nueva página en tu historia, ¡escribe algo increíble!",
    "La fuerza de voluntad es el primer paso hacia cualquier logro significativo.",
    "La grandeza se construye a partir de pequeños pasos valientes.",
    "El único límite a tus sueños es el que tú te pongas.",
    "La magia sucede cuando te atreves a creer en ti mismo.",
    "El futuro pertenece a aquellos que actúan hoy.",
    "La pasión es el combustible que enciende el fuego del éxito.",
    "Cada error es un peldaño hacia el logro.",
    "El cambio es el primer paso hacia el progreso.",
    "La resiliencia es la clave para convertir los desafíos en oportunidades.",
    "El verdadero éxito se mide por la capacidad de inspirar a otros.",
    "Tu esfuerzo es el pincel que pinta tu destino.",
    "No temas al fracaso, teme a no intentarlo.",
    "Cada día es una oportunidad para reinventarte.",
    "La visión sin acción es solo un sueño.",
    "El crecimiento personal comienza con la voluntad de cambiar.",
    "La confianza en uno mismo es el primer secreto del éxito.",
    "El coraje es la puerta que abre todas las posibilidades.",
    "La disciplina es el puente entre tus metas y tus logros.",
    "La autenticidad es el primer paso hacia una vida plena.",
    "El éxito no se encuentra, se construye con cada decisión.",
    "La esperanza es el faro que guía el camino en tiempos de oscuridad."
];

const quote = document.getElementById('quote');
const display = document.getElementById('display');

const generateQuote = () => {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomQuote];
}

display.addEventListener('click', generateQuote);


