// # Palindroma
// ## Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// - Chiedere all'utente una parola

const Word = prompt('Verifica se la parola è palindroma, scrivi una parola');
// console.log(Word);

// - convertiamo la stringa in stampatello minuscolo (con .toLowerCase())

const word = Word.toLowerCase();
console.log(word);

// - dividiamo la parola in caratteri
//     - con un ciclo FOR cicliamo la parola fino ad ottenere tutti i caratteri
//        - Dichiariamo un let array e pushiamo i caratteri ottenuti


let arrayWord = [];

for (i = 0; i < word.length; i++){
    const char = word.charAt(i);
	// console.log(i, char);

    arrayWord.push(char);
}

// console.log(arrayWord);

// - invertiamo la parola e dividiamola in caratteri
//     - con un ciclo FOR cicliamo la parola, ma al contrario (da destra verso sinistra (i--))
//         - Dichiariamo un let array e pushiamo i caratteri ottenuti

let arrayWordReverse = [];

for (i = word.length - 1; i >= 0; i--){
    const char = word.charAt(i);
	// console.log(i, char);

    arrayWordReverse.push(char);
}

// console.log(arrayWordReverse);

// - confrontiamo i risultati ottenuti dai due cicli, quindi confrontiamo i due array
//     - controlliamo se le lettere dell'array sono uguali una ad una, quindi pushamo (solo le lettere uguali) in un terzo array


let arrayWordsComparison = [];

for (i = 0; i < word.length; i++){
    if (arrayWord[i] === arrayWordReverse[i]) {
        console.log('lettera: ' + arrayWord[i] + ', di posizione: ' + i + ' corrispondente');

        const char = arrayWord[i];

        arrayWordsComparison.push(char);
    } else break
}

// console.log(arrayWordsComparison);

// - SE la lunghezza del terzo array ottenuto dal ciclo e di uno degli altri due è uguale => parola palindroma
// - ALTRIMENTI => parola non palindroma

if (arrayWord.length === arrayWordsComparison.length){
    console.log('La parola ' + Word + ' è palindroma');
} else {
    console.log('La parola ' + Word + ' non è palindroma');
}