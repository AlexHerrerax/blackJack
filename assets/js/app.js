let deck = [];
let letras=["C","D","H","S"]
let especiales=["A","J","Q","K"]

//DOM

const btnPedir = document.querySelector('#btnPedir')
const jugadorCarta = document.querySelector('#jugador-carta')

let puntosJugador =0






const crearDeck = () =>{

    for(let i=2; i<=10;i++){
        for(let letra of letras){
           deck.push(i+letra)
        }
    }

    for(let especial of especiales){
        for(let letra of letras){
            deck.push(especial+letra)
        }
    }
}

crearDeck()
deck= _.shuffle(deck)
console.log(deck)



const pedirCarta = () =>{
    let carta = deck.pop()
    return carta;

}



const obtenerValor = (carta) =>{

console.log(carta)

let valor = carta.substring(0,carta.length-1)

return( isNaN(valor)) ? 
       ( valor === "A") ? 11: 10
        :
        valor *1;




}


console.log(deck)




btnPedir.addEventListener('click', () =>{


    const carta = pedirCarta()
    console.log(carta)

    let valor = obtenerValor(carta)
    puntosJugador= puntosJugador+valor
    document.querySelectorAll('small')[0].innerText=puntosJugador

    const nuevaCarta = document.createElement('img');
    nuevaCarta.src=`/assets/cartas/${carta}.png`
    nuevaCarta.classList.add('carta')
    jugadorCarta.append(nuevaCarta)

    if(puntosJugador >=21){
        btnPedir.disabled=true
    }

})
















