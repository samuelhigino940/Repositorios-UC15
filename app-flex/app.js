/**
 *APP - Flex
 *@Author Samuel Cerretti Higino
 */

 // Declaração de variaveis
let Etanol, Gasolina

function calcular() {
    //Entrada de dados(input)
    Etanol = frmFlex.inputEtanol.value
    Gasolina = frmFlex.inputGasolina.value
    // console.log(Etanol)
    // console.log(Gasolina)
    if (Etanol < 0.7 * Gasolina) {
        document.getElementById('status').src="img/etanol.png"
    } else {
        document.getElementById('status').src="img/gasolina.png"
    }
    return false
}