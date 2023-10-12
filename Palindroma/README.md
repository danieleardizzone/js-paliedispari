# Palindroma
## Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

- Chiedere all'utente una parola

- convertiamo la stringa in stampatello minuscolo (con .toLowerCase())

- dividiamo la parola in caratteri
    - con un ciclo FOR cicliamo la parola fino ad ottenere tutti i caratteri
        - Dichiariamo un let array e pushiamo i caratteri ottenuti

- invertiamo la parola e dividiamola in caratteri
    - con un ciclo FOR cicliamo la parola, ma al contrario (da destra verso sinistra (i--))
        - Dichiariamo un let array e pushiamo i caratteri ottenuti

- confrontiamo i risultati ottenuti dai due cicli, quindi confrontiamo i due array
    - controlliamo se le lettere dell'array sono uguali una ad una, quindi pushamo (solo le lettere uguali) in un terzo array

- SE la lunghezza del terzo array ottenuto dal ciclo e di uno degli altri due è uguale => parola palindroma
- ALTRIMENTI => parola non palindroma