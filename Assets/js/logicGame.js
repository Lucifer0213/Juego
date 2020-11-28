let juegos = [{
    name: 'WarZone || Call Of Duty Warzone',
    foto: 'warZone.jpg',
    preguntas: ['¿Permite el combate en linea?', '¿Permite menos de 100 jugadores?', '¿Tiene mas de un modo de juego?', '¿Uno de sus modos de juego es similar a PUBG?', '¿Fue publicado por ACTIVISION?'],
    respuetas: ['si', 'no', 'si', 'si', 'si'],
}, {
    name: 'Assassins Creed Unity || Unity ',
    foto: 'unity.jpg',
    preguntas: ['¿Esta diseñado solo para consolas de 8th Gen ?', '¿El lugar donde se desarrola es Europa?', '¿Esta basado en ciencia ficción?', '¿Usa Armas?', '¿Fue desarrolado por UBISOFT?'],
    respuetas: ['si', 'si', 'no', 'si', 'si'],
}, {
    name: 'Halo 1 || Halo Combat Evolved',
    foto: 'halo1.jpg',
    preguntas: ['¿Existen extraterrestres en el juego?', '¿El juego es desarrollado en la tierra?', '¿Tiene posee solo armas futuristas?', '¿El jugador principal lo llaman "Jefe Maestro"?', '¿Fue publicado por Microsoft Games Studios?'],
    respuetas: ['si', 'no', 'no', 'si', 'si'],
}, {
    name: 'among us || Among Us',
    foto: 'amongUs.jpg',
    preguntas: ['¿Hay asesinos?','¿El hambien es hecho solamente en una nave?', '¿Tiene poderes?', '¿Son parecidos a los teletuvis?', '¿Tienen hijos?'],
    respuetas: ['si', 'no', 'no', 'si', 'si'],
}, {
    name: 'Fornite ',
    foto: 'fornite.jpg',
    preguntas: ['¿Se puede construir?', '¿Posee armas?', '¿Esta diseñado para diferentes consolas?', '¿El juego permite jugar hasta con 100 personas?', '¿Fue desarrollado por EpicGames?'],
    respuetas: ['si', 'si', 'si', 'si', 'si'],
}, {
    name: 'Destiny',
    foto: 'destiny.png',
    preguntas: ['¿Es un mundo abierto?', '¿Publicado por activision?', '¿Hay robots?', '¿Parte del juego es desarrollado en la antigua rusia?', '¿Existen guardianes?'],
    respuetas: ['si', 'si', 'si', 'si', 'si'],
}
];

let initpuntaje = 0;
let puntos = 0;
const btnJugar = document.getElementById("btnJugar");
const imgjuego = document.getElementById("imgjuego");
let indice = 0;
let opacidad = 20;

btnJugar.addEventListener('click', () => {

    const pregunta0 = document.getElementById("pregunta0");
    const pregunta1 = document.getElementById("pregunta1");
    const pregunta2 = document.getElementById("pregunta2");
    const pregunta3 = document.getElementById("pregunta3");
    const pregunta4 = document.getElementById("pregunta4");



    /* pregunta1 a la pregunta4 */

    imgjuego.src = "./Assets/img/" + juegos[indice].foto;
    imgjuego.style.filter = "blur(20px)";

    pregunta0.value = juegos[indice].preguntas[0];
    pregunta1.value = juegos[indice].preguntas[1];
    pregunta2.value = juegos[indice].preguntas[2];
    pregunta3.value = juegos[indice].preguntas[3];
    pregunta4.value = juegos[indice].preguntas[4];
    /* cargar el resto de pregutas */


})


// progar las respuestas recividas en el select

const rta0 = document.getElementById("rta0");

rta0.addEventListener('change', () => {

    if (rta0.value == juegos[indice].respuetas[0]) {
        opacidad = opacidad - 4;
        imgjuego.style.filter = "blur(" + opacidad + "px)";
        document.getElementById("icoRta0").src = "./Assets/img/si.png";

    } else {
        document.getElementById("icoRta0").src = "./Assets/img/no.png";
    }

    rta0.disabled = true;
})

const rta1 = document.getElementById("rta1");

rta1.addEventListener('change', () => {

    if (rta1.value == juegos[indice].respuetas[1]) {
        opacidad = opacidad - 4;
        imgjuego.style.filter = "blur(" + opacidad + "px)";
        document.getElementById("icoRta1").src = "./Assets/img/si.png";

    } else {
        document.getElementById("icoRta1").src = "./Assets/img/no.png";
    }

    rta1.disabled = true;
})


const rta2 = document.getElementById("rta2");

rta2.addEventListener('change', () => {

    if (rta2.value == juegos[indice].respuetas[2]) {
        opacidad = opacidad - 4;
        imgjuego.style.filter = "blur(" + opacidad + "px)";
        document.getElementById("icoRta2").src = "./Assets/img/si.png";

    } else {
        document.getElementById("icoRta2").src = "./Assets/img/no.png";
    }

    rta2.disabled = true;
})

const rta3 = document.getElementById("rta3");

rta3.addEventListener('change', () => {

    if (rta3.value == juegos[indice].respuetas[3]) {
        opacidad = opacidad - 4;
        imgjuego.style.filter = "blur(" + opacidad + "px)";
        document.getElementById("icoRta3").src = "./Assets/img/si.png";

    } else {
        document.getElementById("icoRta3").src = "./Assets/img/no.png";
    }

    rta3.disabled = true;
})

const rta4 = document.getElementById("rta4");

rta4.addEventListener('change', () => {

    if (rta4.value == juegos[indice].respuetas[4]) {
        opacidad = opacidad - 4;
        imgjuego.style.filter = "blur(" + opacidad + "px)";
        document.getElementById("icoRta4").src = "./Assets/img/si.png";

    } else {
        document.getElementById("icoRta4").src = "./Assets/img/no.png";
    }

    rta4.disabled = true;
})

function vaciarinput() {
    vaciar = document.getElementById("RespuestaGeneral");
    vaciar.value = '';
}
function vaciarpreguntas() {
    rta0.value = "";
    rta0.disabled = false;
    document.getElementById("icoRta0").src = "";
    rta1.value = "";
    rta1.disabled = false;
    document.getElementById("icoRta1").src = "";
    rta2.value = "";
    rta2.disabled = false;
    document.getElementById("icoRta2").src = "";
    rta3.value = "";
    rta3.disabled = false;
    document.getElementById("icoRta3").src = "";
    rta4.value = "";
    rta4.disabled = false;
    document.getElementById("icoRta4").src = "";
}


const btnRespuesta = document.getElementById("btnRespuesta");

btnRespuesta.addEventListener('click', () => {
    var longitud = juegos.length;
    aleatorio = Math.floor(Math.random() * (longitud))
    let random = []
    random.push(aleatorio);
    console.log(random);
    opacidad = 20;
    const RespuestaGeneral = document.getElementById("RespuestaGeneral").value;
    const error = document.getElementById("error");
    var pru = indice;
    personaje = juegos[pru].name;
    let similar = (personaje.toLowerCase()).includes(RespuestaGeneral.toLowerCase());
    console.log(similar);
    if (pru < longitud) {
        if (RespuestaGeneral == juegos[pru].name || similar == true) {
            vaciarinput();
            vaciarpreguntas();
            swal("Excelente!", "El nombre del juego es Corecto!", "success");
            pru = ++indice;
            if (pru < longitud) {
                imgjuego.src = "./Assets/img/" + juegos[pru].foto;
                imgjuego.style.filter = "blur(20px)";
                pregunta0.value = juegos[pru].preguntas[0];
                pregunta1.value = juegos[pru].preguntas[1];
                pregunta2.value = juegos[pru].preguntas[2];
                pregunta3.value = juegos[pru].preguntas[3];
                pregunta4.value = juegos[pru].preguntas[4];
                initpuntaje = initpuntaje + 20;
                console.log(initpuntaje)

            } else {
                initpuntaje = initpuntaje + 20;

                if (puntos > initpuntaje) {
                    alert('¡Casi Ganas Tu Puntaje es:'+ initpuntaje)
                } else {
                    alert('¡Excelente Tu Puntaje es:' + initpuntaje)
                }
            }

        } else {
            swal("Lo siento!", "El nombre del juego es Incorrecto", "error");
            pru = ++indice;
            vaciarinput();
            vaciarpreguntas();
            puntos = puntos + 20;
            if (pru < longitud) {
                imgjuego.src = "./Assets/img/" + juegos[pru].foto;
                imgjuego.style.filter = "blur(20px)";
                pregunta0.value = juegos[pru].preguntas[0];
                pregunta1.value = juegos[pru].preguntas[1];
                pregunta2.value = juegos[pru].preguntas[2];
                pregunta3.value = juegos[pru].preguntas[3];
                pregunta4.value = juegos[pru].preguntas[4];
            } else {
                if (puntos > initpuntaje) {
                    swal("¡PERDISTE!", "Tu Puntaje es: " + initpuntaje);
                } else {
                    swal("¡EXCELENTE!", "Tu Puntaje es: " + initpuntaje);
                }
            }

        }
    }
})