import _ from "underscore";

import { generarDeck, getCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';

let deck = []

let puntosJugador = 0
let puntosComputadora = 0

const tipos = ['C','D','H','S']
const monarcas = ['K','Q','J','A']

const botonPedir = document.querySelector('#btnPedir')
const botonDetener = document.querySelector('#btnDetener')
const botonNuevo = document.querySelector('#btnNuevo')

const puntajes = document.querySelectorAll('small')
const divJugadorCartas = document.querySelector('#jugador-cartas')
const divCompuCartas = document.querySelector('#computadora-cartas')


deck = generarDeck(tipos,monarcas)

// Eventos
botonPedir.addEventListener('click', () => {
    
    const carta = getCarta(deck)
    
    puntosJugador += valorCarta(carta)
    puntajes[0].innerText = puntosJugador

    const imgCarta = crearCartaHTML(carta)
    divJugadorCartas.append(imgCarta)

    if (puntosJugador > 21) {
        botonPedir.disabled = true
        botonDetener.disabled = true
        turnoComputadora(puntosJugador, puntajes[1], divCompuCartas, deck)

    } else if (puntosJugador === 21 ){
        botonPedir.disabled = true
        botonDetener.disabled = true
        turnoComputadora(puntosJugador, puntajes[1], divCompuCartas, deck)
    }
    
})

botonDetener.addEventListener('click', () => {
    botonDetener.disabled = true
    botonPedir.disabled = true

    turnoComputadora(puntosJugador, puntajes[1], divCompuCartas, deck)
})

botonNuevo.addEventListener('click', () => {
    
    deck = generarDeck(tipos, monarcas)
    
    puntosComputadora = 0
    puntosJugador = 0

    puntajes[0].innerText = 0
    puntajes[1].innerText = 0
    
    
    divJugadorCartas.innerHTML = ''
    divCompuCartas.innerHTML =''

    botonPedir.disabled = false
    botonDetener.disabled = false
})