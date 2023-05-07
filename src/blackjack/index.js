import _ from "underscore";
import {generarDeck} from "./usecases/createDeck";
import {getCarta} from "./usecases/getCarta";
import {valorCarta} from "./usecases/valorCarta";

let deck

const tipos = ['C','D','H','S']
const monarcas = ['K','Q','J','A']

const botonPedir = document.querySelector('#btnPedir')
const botonDetener = document.querySelector('#btnDetener')
const botonNuevo = document.querySelector('#btnNuevo')

const puntajes = document.querySelectorAll('small')
const divJugadorCartas = document.querySelector('#jugador-cartas')
const divCompuCartas = document.querySelector('#computadora-cartas')

let puntosJugador = 0
let puntosComputadora = 0


deck = generarDeck(tipos,monarcas)




const turnoComputadora = (puntosMin) => {
    
    do {
        const carta = getCarta(deck)
        puntosComputadora += valorCarta(carta)
        puntajes[1].innerText = puntosComputadora

        const imgCarta = document.createElement('img')
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')

        divCompuCartas.append(imgCarta)

        if (puntosMin > 21) {
            break
        }
    
    } while ((puntosComputadora < puntosMin) && (puntosMin <= 21));

    setTimeout(() => {
    
        if (puntosMin === puntosComputadora ) {
            alert('Empate!')
        } else if (puntosMin > 21) {
            alert('Computadora gana!')
        } else if (puntosComputadora > 21 ) {
            alert('Jugador gana!')
        } else {
            alert('Computadora gana!')
        }
    }, 100);
}

// Eventos
botonPedir.addEventListener('click', () => {
    
    const carta = getCarta(deck)
    console.log(deck)
    puntosJugador += valorCarta(carta)
    puntajes[0].innerText = puntosJugador

    const imgCarta = document.createElement('img')
    imgCarta.src = `assets/cartas/${carta}.png`
    imgCarta.classList.add('carta')

    divJugadorCartas.append(imgCarta)

    if (puntosJugador > 21) {
        botonPedir.disabled = true
        botonDetener.disabled = true
        turnoComputadora(puntosJugador)
    } else if (puntosJugador === 21 ){
        botonPedir.disabled = true
        botonDetener.disabled = true
        turnoComputadora(puntosJugador)
    }
    
})

botonDetener.addEventListener('click', () => {
    botonDetener.disabled = true
    botonPedir.disabled = true
    turnoComputadora(puntosJugador)
})

botonNuevo.addEventListener('click', () => {
    
    deck = generarDeck(tipos, monarcas)

    puntajes[0].innerText = 0
    puntajes[1].innerText = 0
    
    puntosComputadora = 0
    puntosJugador = 0
    
    divJugadorCartas.innerHTML = ''
    divCompuCartas.innerHTML =''

    botonPedir.disabled = false
    botonDetener.disabled = false
})