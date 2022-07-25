let deck = [];
let letras=["C","D","H","S"]
let especiales=["A","J","Q","K"]

//DOM

const btnPedir = document.querySelector('#btnPedir')
const btnDetener = document.querySelector('#btnDetener')
const btnNuevo = document.querySelector('#btnNuevo')
const jugadorCarta = document.querySelector('#jugador-carta')
const computadorCarta = document.querySelector('#computador-carta')

let puntosJugador =0
let puntosComputador =0






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

    if(puntosJugador >21 ||puntosJugador===21 ){
        btnPedir.disabled=true
        btnDetener.disabled=true
        juegaComputador()
    
    }


    

})

const juegaComputador = () =>{


    do {
        
        const carta = pedirCarta()

    let valor = obtenerValor(carta)
    puntosComputador= puntosComputador+valor
    document.querySelectorAll('small')[1].innerText=puntosComputador

    const nuevaCarta = document.createElement('img');
    nuevaCarta.src=`/assets/cartas/${carta}.png`
    nuevaCarta.classList.add('carta')
    computadorCarta.append(nuevaCarta);

    if(puntosComputador>21){
    break;
}


    } while ((puntosComputador<=puntosJugador)&&(puntosJugador<21) );

    setTimeout(() => {
           if(puntosComputador===puntosJugador){
            alert("Nadie gana")
           }else if(puntosJugador>21){
            alert("Perdiste")
           }else if(puntosComputador>21){
            alert("Ganaste")
           }else if(puntosJugador===21){
            alert("Ganaste")
           }else{
            alert("Perdiste")
           }

    }, 100);


   
}

btnDetener.addEventListener('click', ()=>{

btnPedir.disabled=true;
btnDetener.disabled=true;
juegaComputador();





})


btnNuevo.addEventListener('click', ()=>{

    console.log(deck)
deck=[];
crearDeck()

    puntosJugador =0
puntosComputador =0
btnPedir.disabled=false;
btnDetener.disabled=false;
document.querySelectorAll('small')[0].innerText=0

document.querySelectorAll('small')[1].innerText=0

jugadorCarta.innerHTML=""
computadorCarta.innerHTML=""

console.log(deck)

})














