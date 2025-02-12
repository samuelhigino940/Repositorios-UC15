/**
 * Estudo o método setInterval (timer)
 * @author Samuel Cerretti Higino
 */

function piscar() {
    let ligada = false
    //A Estrutura abaixo cria um intervalo a cada 1000ms= 1s
    setInterval(()=>{
        if(ligada===false){
            document.getElementById('lamp').src="img/on.jpg"
        }else{
            document.getElementById('lamp').src="img/off.jpg"
        }
        ligada = !ligada //função NOT inverte (true - false)
    },1000) //Ajuste do intervalo(1000ms =1s)

}