const rickArray = [
  "Wubba Lubba Dub Dub.",
  "Te voy a decir lo que pienso de las escuelas, Jerry: Es una pérdida de tiempo (...) La escuela no es un lugar para las personas inteligentes.",
  "Las bodas son básicamente funerales con pastel.",
  "¡Me he convertido en un pepinillo, Morty! ¡Soy Pickle Riiiick!",
  "Escucha, Morty, odio decirte esto, pero eso que la gente llama “amor” es sólo una reacción química que obliga a los animales a reproducirse.",
  "Estás creciendo, Morty. Creciendo como una enorme espina dentro de mi trasero.",
  "Odio este lugar Morty, no aguanto la burocracia. No me gusta que me digan a dónde he de ir o lo que tengo que hacer, es un atropello.",
  "No lo sé Morty, quizá me odie a mí mismo o puede que crea que merezco morir. Necesitamos vacaciones.",
  "No me vas a creer, porque casi nunca pasa, pero cometí un error.",
  "No toques esto, está más allá de tu entendimiento.",
  "¡Lámeme, lámeme, lámeme las pelotas!",
  "Oh, chico, ¿así que realmente aprendiste algo hoy? ¿Qué es esto, una verdadera amistad?",
  "Ahora, si me disculpan, tengo una aventura rápida en solitario para continuar, y esta no será dirigida por Ron Howard.",
  "No odies al jugador, odia al juego, hijo.",
];
const mortyArray = [
  "Nadie existe a propósito. Nadie pertenece a ninguna parte. Todos vamos a morir. Ven a ver la televisión.",
  "Podríamos disfrutarlo un rato. Es decir, mira lo loco que es todo.",
  "Rick, esto me molesta mucho. Es muy duro enterarse de que no les caemos bien.",
  "No sé yo. Hoy has conseguido destruirlo casi todo. A los villanos, los héroes, las líneas que los separan, mi infancia.",
  "Por Dios, abuelo.",
  "Nadie existe a propósito. Nadie pertenece a ningún lugar. Todos vamos a morir.",
  "Quisiera que esa escopeta fuera mi pene.",
  "¿Cuándo será la próxima vez que verás algo tan loco cómo esto?",
  "Dios mío, Rick. No sabía que juntarme contigo me estaba haciendo más inteligente.",
  "¿Y qué si él es el diablo, Rick? Al menos el diablo tiene trabajo. Al menos es activo en la comunidad y cuenta con amigos.",
  "Bienvenido al club, amigo.",
  "¡Estoy harto de todas estas aventuras tan locas! ¡Eso fue demasiado traumático!",
  "Antes o después hay que saber despedirse.",
  "Las buenas aventuras tienen un final feliz..",
  "Bueno, no puedo curar la muerte, pero sí abrazarte.",
  "¿Por qué estáis peleando? ¿No os dais cuenta que sois todos iguales?",
];

const btnMorty = document.getElementById("btnMorty");
const btnRick = document.getElementById("btnRick");

function fraseAleatoria(frase) {
  let indiceAleatorio = Math.floor(Math.random() * frase.length);
  return frase[indiceAleatorio];
}

btnMorty.addEventListener("click", () => {
  document.getElementById("phrase-morty").innerHTML =
    fraseAleatoria(mortyArray);
});

btnRick.addEventListener("click", () => {
  document.getElementById("phrase-rick").innerHTML = fraseAleatoria(rickArray);
});
