

const exercices = [
    //EXERCICE 1
    function funcexo1() {
        return "Hello, world ! <br>Bienvenue dans le monde de la programmation !";
    },
    //EXERCICE 2
    function funcexo2() {
        const nb1 = 5;
        const nb2 = 10;
        return `Addition de ${nb1} et ${nb2} : ${nb1} + ${nb2} = ${nb1 + nb2}.`;
    },
    //EXERCICE 3
    function funcexo3() {
        const panier = ["comcombre", "grenade", "mûre"];
        let aff = "";
        panier.forEach((fruit) => {
            aff += `<br>-${fruit}`
        });
        return `Liste de fruits: ${aff}`;
    },
    //EXERCICE 4
    function funcexo4() {
        let result = "";
        for (let i = 1; i <= 20; i++) {
            if (i % 2 === 0) {
                result += `${i}, `;
            }
        }
        return `Nombres pairs entre 1 et 20 :<br>${result}`;
    },
    //EXERCICE 5
    function funcexo5() {
        const mot = "voiture";
        let nbVoyelle = 0;
        for (let j = 0; j < mot.length; j++) {
            if ("aeiou".includes(mot[j])) {
                nbVoyelle++
            }
        }
        return `Il y à ${nbVoyelle} voyelles dans le mot ${mot} !`;
    },
    //EXERCICE 6
    function funcexo6() {
        let phras = "Je travail chez Carglass";

        function comptLetters(phrase) {
            phrase = phrase.toLowerCase();
            let lettres = {};
            for (let letter of phrase) {
                if(letter === ' ') continue
                if (lettres[letter]) {
                    lettres[letter]++;
                } else {
                    lettres[letter] = 1;
                }
            }
            return lettres;
        }

        let resultat = comptLetters(phras);
        let resultatTexte = Object.entries(resultat)
            .map(([lettre, count]) => `${lettre} : ${count} fois`)
            .join('<br>');

        return `Comptage des lettres dans la phrase "${phras}" :<br>${resultatTexte}`;
    },
    //EXERCICE 7
    function funcexo7() {
        const nbNegEtPos = [3, -6, 7, -13, 3, 23, -1];
        function triageSigne(tableau) {
            let positifs = [];
            let negatifs = [];
            tableau.forEach((nb) => {
                if (nb >= 0) {
                    positifs.push(nb);
                } else {
                    negatifs.push(nb);
                }
            });
            return `Les nombres négatifs sont:<br> ${negatifs}<br>Et les nombres positifs sont:<br> ${positifs}`;
        }
        return triageSigne(nbNegEtPos);
    },
    //EXERCICE 8
    function funcexo8() {
        const liste = [3, 5, 2, 8, 1];
        return `Le max de la liste est ${Math.max(...liste)}.`;
    },
    //EXERCICE 9
    function funcexo9() {
        let motARetourner = "voiture";
        const reverseStr = (str) => [...str].reverse().join("");
        return `Le mot "${motARetourner}" retourné : ${reverseStr(motARetourner)}`;
    }
]


///////////////INTERACTIVITE///////////////

const numex = document.getElementById("numExo");
const affichage = document.getElementById("affichage");

const divs = [];
document.querySelectorAll(".exercice").forEach((div) => {
    divs.push(div);
})



divs.forEach((div, divIndex) => {
    const btn = div.querySelectorAll(".bout");
    btn.forEach((btn) => {
        btn.addEventListener('click', () => {

            numex.textContent = `${btn.textContent}`;
            let func = exercices[divIndex];
             
            affichage.innerHTML = func();
        });
    });

})




