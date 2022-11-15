/* Dare output relativo.Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */ 


// chiedo pari o dispari e numero all' utente
const sceltaUtente = prompt('scegli un pari o dispari');
const numUtente = parseInt(prompt('scegli un numero'));

// genero numero cpu
let numCpu = random();
console.log(numCpu);

// sommo i numeri
let totNumber= somma(numCpu,numUtente);
console.log(totNumber);

// stabilisco se il numero è pari o dispari;

let winner = check();



function random() {

    const numRandom = parseInt(Math.floor(Math.random() * 5) +1)  ;
    return numRandom
    
}

function somma(numUtente, numCpu) {

    const sommaLanci = numUtente + numCpu;
    return sommaLanci;
}

function check() {
    if (totNumber % 2 === 0  ) {
        const pari = 'pari';

           if ( pari === sceltaUtente){
            alert('utente vince');
           }

           else {
            alert('cpu vince');
           }
        
        
    }

    else if (totNumber % 2 === 1) {
        const dispari = 'dispari';

           if ( dispari === sceltaUtente){
            alert('utente vince');
           }

           else {
            alert('cpu vince');
           }
        
        
    }

    
}