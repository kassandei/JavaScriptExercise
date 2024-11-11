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


