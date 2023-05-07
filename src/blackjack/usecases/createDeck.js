
import _ from "underscore";

/**
 * Esta funcion crea un nuevo Deck de cartas Inglesas
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposMonarca 
 * @returns {Array<string>} Deck de cartas barajeado
 */
export const generarDeck = (tiposDeCarta, tiposMonarca) => {
    let deck = []

    if (!tiposDeCarta || tiposDeCarta.length === 0) { 
        throw new Error('Tipos de carta es obligatorio como un arreglo de Strings')
    }

    if (!tiposMonarca || tiposMonarca.length === 0) { 
        throw new Error('TiposMonarca es obligatorio como un arreglo de Strings')
    }

    for (let index = 2; index <= 10; index++) {
        for (let tipo of tiposDeCarta) {
            deck.push(index + tipo)
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let mon of tiposMonarca) {
            deck.push(mon + tipo)
        }
    }

    return _.shuffle(deck)
}
