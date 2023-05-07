
/**
 * Funcion que se encarga de obtener la primera carta del mazo
 * @param {Array<string>} deck 
 * @returns {string} Carta obtneida
 */
export const getCarta = (deck) => {
    if (!deck || deck.length ==  0) {
        throw new Error('No hay más cartas')
    }
    let carta = deck.pop()
    return carta
}
