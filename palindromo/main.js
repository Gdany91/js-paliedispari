/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Dare output relativo.Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */

// chiedo la parola all utente
const parola = prompt('inserisci una parola');


// chiamo la funzione 
let parolaUtente = palindromo(parola);

// controllo se la parola è un palindromo
if(parola == parolaUtente){
    alert('la parola è palindroma');
  } else {
    alert('la parola non è palindroma');
  }
  
 // divido la parola in caratteri, inverto i caratteri, ricreo la parola al contrario
function palindromo(world){
  return world.split('').reverse().join(''); 
    
   
}
