/**
 * Carrossel de imagens
 * @author Samuel Cerretti Higino
 */

let indice = 0 //0,1,2(3 imagens)

// Capturar as tags html identificadas(id)
const imgs=document.getElementById('imagens')
// Capturar 2 elementos html
const imagem=document.querySelectorAll('#imagens img')

function carrossel(){
    indice++ //somar 1 a variavel
    //console.log(indice)
    if(indice>=imagem.length){
        indice = 0
    }
        //A linha abaixo modifica o estilo CSS de imagens
        //style modifica o CSS
        //Transform (deslocamento no eixo X)
        imgs.style.transform = `translateX(${-indice * 512}px)`
    
}
// a linha abaixo executa a função carrossel a cada 2s
setInterval(carrossel,2000)