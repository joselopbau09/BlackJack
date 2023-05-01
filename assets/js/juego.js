
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

function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
}

const generarDeck = () => {
    deck = []

    for (let index = 2; index <= 10; index++) {
        for (let tipo of tipos) {
            deck.push(index + tipo)
        }
    }

    for (let tipo of tipos) {
        for (let mon of monarcas) {
            deck.push(mon + tipo)
        }
    }

    return fisherYatesShuffle(deck)
}

generarDeck()

const getCarta = () => {
    if (deck.length ==  0) {
        throw 'No hay más cartas'
    }
    let carta = deck.pop()
    return carta
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1)
    return (isNaN(valor)) ? ((valor === 'A') ? 11:10):valor*1
}

const turnoComputadora = (puntosMin) => {
    
    do {
        const carta = getCarta()
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
    
    const carta = getCarta()
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
    
    generarDeck()

    puntajes[0].innerText = 0
    puntajes[1].innerText = 0
    
    puntosComputadora = 0
    puntosJugador = 0
    
    divJugadorCartas.innerHTML = ''
    divCompuCartas.innerHTML =''

    botonPedir.disabled = false
    botonDetener.disabled = false
})