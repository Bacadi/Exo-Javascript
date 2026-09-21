//EXERCICE 1
console.log("Hello, world !");
console.log("Bienvenue dans le monde de la programmation !");


//EXERCICE 2
const nb1 = 5;
const nb2 = 10;
console.log(nb1 + nb2);

//EXERCICE 3
const panier = ["comcombre", "grenade", "mûre"];

panier.forEach((fruit) => {
    console.log(fruit);
});

//EXERCICE 4
for(let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

//EXERCICE 5
const mot = "voiture";
let nbVoyelle = 0;
for(let j = 0; j < mot.length; j++){
    if("aeiou".includes(mot[j])){
        nbVoyelle++
    }
}
console.log(nbVoyelle);

//EXERCICE 6
const phrase = "Je travail chez Carglass";

function comptLetters(phrase) {
    phrase = phrase.toLowerCase();
    let lettres = {};
    for (let letter of phrase) {
        if (lettres[letter]) {
            lettres[letter]++;
        } else {
            lettres[letter] = 1;
        }
    }
    return lettres;
}

console.log(comptLetters(phrase));