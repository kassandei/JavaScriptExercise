function calcoloBMI() {
    let peso = document.getElementById("peso").value;
    let altezza = document.getElementById("altezza").value;
    document.getElementById("risultato").innerHTML = peso / (altezza *altezza);
}

function paradiso() {
    const minuti = 24 * 60;
    let mese = document.getElementById("mese").value
    let anno = document.getElementById("anno").value
    let risultato;
    if(["1", "3", "5", "7", "8", "10", "12"].includes(mese))
        risultato = minuti * 31;
    else if(["4", "6", "9", "11"].includes(mese))
        risultato = minuti * 30; 
    else if("2" == mese) 
        if(leapYear(anno))
            risultato = minuti * 29;
        else 
            risultato = minuti * 28;
    document.getElementById("risultato").innerHTML = risultato;


}

function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}


function converti() {
    let numero = document.getElementById("numero").value;
    let baseIniziale = document.getElementById("baseIniziale").value;
    let baseFinale = document.getElementById("baseFinale").value

    if(baseIniziale != 10)
        numero = parseInt(numero, baseIniziale);
    document.getElementById("risultato").innerHTML = numero.toString(baseFinale);

}
function pescaCarta() {
    // Array delle carte della Briscola (stesso mazzo che abbiamo creato prima)
    const carteBriscola = [
      { seme: "Coppe", valore: "1" },
      { seme: "Coppe", valore: "2" },
      { seme: "Coppe", valore: "3" },
      { seme: "Coppe", valore: "4" },
      { seme: "Coppe", valore: "5" },
      { seme: "Coppe", valore: "6" },
      { seme: "Coppe", valore: "7" },
      { seme: "Coppe", valore: "Fante" },
      { seme: "Coppe", valore: "Cavallo" },
      { seme: "Coppe", valore: "Re" },

      { seme: "Denari", valore: "1" },
      { seme: "Denari", valore: "2" },
      { seme: "Denari", valore: "3" },
      { seme: "Denari", valore: "4" },
      { seme: "Denari", valore: "5" },
      { seme: "Denari", valore: "6" },
      { seme: "Denari", valore: "7" },
      { seme: "Denari", valore: "Fante" },
      { seme: "Denari", valore: "Cavallo" },
      { seme: "Denari", valore: "Re" },

      { seme: "Spade", valore: "1" },
      { seme: "Spade", valore: "2" },
      { seme: "Spade", valore: "3" },
      { seme: "Spade", valore: "4" },
      { seme: "Spade", valore: "5" },
      { seme: "Spade", valore: "6" },
      { seme: "Spade", valore: "7" },
      { seme: "Spade", valore: "Fante" },
      { seme: "Spade", valore: "Cavallo" },
      { seme: "Spade", valore: "Re" },

      { seme: "Bastoni", valore: "1" },
      { seme: "Bastoni", valore: "2" },
      { seme: "Bastoni", valore: "3" },
      { seme: "Bastoni", valore: "4" },
      { seme: "Bastoni", valore: "5" },
      { seme: "Bastoni", valore: "6" },
      { seme: "Bastoni", valore: "7" },
      { seme: "Bastoni", valore: "Fante" },
      { seme: "Bastoni", valore: "Cavallo" },
      { seme: "Bastoni", valore: "Re" }
    ];

    // Genera un indice casuale tra 0 e la lunghezza dell'array carteBriscola - 1
    const indiceCasuale = Math.floor(Math.random() * carteBriscola.length);
    
    // Ottieni la carta corrispondente all'indice casuale
    const cartaPesca = carteBriscola[indiceCasuale];

    // Mostra la carta (seme e valore) nel risultato
    document.getElementById("risultato").innerHTML = `Carta pescata: ${cartaPesca.valore} di ${cartaPesca.seme}`;
}



function parole() {
        person = [];
        for(let i = 0; i < 5; i++) 
            person[i] = prompt("STRINGA CAPO");

        person.sort(myOrder);

        document.getElementById("risultato").innerHTML = person;



}

function myOrder(a, b) {
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    if(a[3] < b[3]) return -1;
    if(a[3] > b[3]) return 1;

    return 1;
}

let operatore;
let input;
let inputcopy;
function input0() {
    input += "0";
}

function input1() {
    input += "1";
}
function multi() {
    inputcopy = input;
    operatore = "*";
    input = "";
}
function add() {
    operatore = "+";
    input = "";
}


function calcolatriceBinaria() {
    let numero = inputcopy;
    //numero = parseInt(numero, 2);

    let numero2 = input;
    //numero2 = parseInt(numero2, 2);

    let risultato;    
    if(operatore == "+") 
        risultato = numero + numero2;
    else
        risultato = numero * numero2;
    
    document.getElementById("risultato").innerHTML = risultato.toString(2);

}