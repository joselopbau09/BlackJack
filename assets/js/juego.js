
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
        for (let esp of especiales) {
            deck.push(esp + tipo)
        }
    }

    return _.shuffle(deck)
}

generarDeck()

