
let deck = []

const tipos = ['C','D','H','S']
const monarcas = ['K','Q','J','A']

const generarDeck = () => {

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

    return _.shuffle(deck)
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

const val = valorCarta('8D')
console.log(val)