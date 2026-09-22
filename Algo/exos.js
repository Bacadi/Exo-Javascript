

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
                if (letter === ' ') continue
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
        return `Le max de la liste: ${liste} est ${Math.max(...liste)}.`;
    },
    //EXERCICE 9
    function funcexo9() {
        let motARetourner = "voiture";
        const reverseStr = (str) => [...str].reverse().join("");
        return `Le mot "${motARetourner}" retourné : ${reverseStr(motARetourner)}`;
    },

    /////////PARTIE 2

    //EXERCICE 10 
    function funcexo10() {
        let loopIte = 5;
        let output = "";

        for (let i = 1; i <= 5; i++) {
            output += `${"*".repeat(i)}<br>`;
        }
        return `Pyramide de ${loopIte} étages:<br>${output}`;
    },
    //EXERCICE 11
    function funcexo11() {
        const heros = ["wolverine", "spiderman", "ironman", "superman", "antman"];
        let aff = "";
        heros.forEach((el) => {
            aff += `<br>Je suis fan de ${el}!`
        });
        return `Phrases pour les héros: ${aff}`
    },
    //EXERCICE 12
    function funcexo12() {
        let rebour = "";
        let compt = 10;
        const tot = compt;
        while (compt > 0) {
            rebour += `${compt}<br>`
            compt--
        }
        return `Décollage dans ${tot} secondes:<br>${rebour}Décollage !`;
    },
    //EXERCICE 13
    function funcexo13() {
        let aff = "";
        const amis = ["Philippe", "Bernard", "Jean-Marie", "Christophe", "Patrick"];
        amis.forEach((ami, index) => {
            while (index >= 0) {
                aff += `${ami.repeat(index + 1)} `;
                index = - 1;
            }
            aff += `<br>`;
        })
        return `Noms des amis répétés selon leur position dans le tableau:<br>${aff}`
    },
    //EXERCICE 14.1
    function funcexo14_1() {
        let rep = "";
        while (rep != 3 && rep != 2 && rep != 3) {
            rep = prompt("Donner un chiffre entre 1 et 3 pour pouvoir continuer", 0);
        }
        return `Vous avez choisis le chiffre: "${rep}" compris entre 1 et 3 inclus.`
    },
    //EXERCICE 14.2
    function funcexo14_1() {
        let rep = "";
        let nombre = NaN;
        let message = "Donner un chiffre entre 10 et 20 pour pouvoir continuer";

        while (isNaN(nombre) || nombre < 10 || nombre > 20) {
            rep = prompt(message, 0);
            nombre = Number(rep);

            if (nombre < 10) {
                message = "Plus Grand !";
            } else if (nombre > 20) {
                message = "Plus Petit !";
            } else if (isNaN(nombre) || rep === "" || rep === null) {
                message = "Merci d'entrer un nombre valide entre 10 et 20";
            }
        }
        return `Vous avez choisis le chiffre: "${rep}" compris entre 10 et 20 inclus.`
    },
    //EXERCICE 14.3
    function funcexo14_3() {
        let aff = "";
        let depart = parseInt(prompt("Entrez un nombre de départ :"));
        for (let i = 1; i <= 10; i++) {
            aff += `${depart + i}<br>`;
        }
        return `Les 10 nombres qui suivent ${depart} sont:<br>${aff}`
    },
    ///EXERCICE 14.4
    function funcexo14_4() {
        let table = "";
        let dep = parseInt(prompt("Entrez un nombre dont vous voulez la table de multiplication.", 7));
        for (let i = 1; i <= 10; i++) {
            table += `${dep} x ${i} = ${dep * i}<br>`;
        }
        return `La table de ${dep}:<br>${table}`
    },
    //EXERCICE 14.5
    function funcexo14_5() {
        let somme = 0;
        let dep = parseInt(promp("Entrez un nombre pour déterminer la fin de la somme", 5))
        for (let i = 1; i <= dep; i++) {
            somme += i;
        }
        return `La somme des entier de 1 à ${dep} vaut: ${somme}.`;
    },
    //EXERCICE 14.6
    function funcexo14_6() {
        let fact = 1;
        let phrase = "";
        let dep = prompt("Entrez un nombre dont vous voulez la factorielle.", 4);
        for (let i = 1; i <= dep; i++) {
            fact *= i;
            if (i != dep) {
                phrase += `${i} x `
            } else {
                phrase += `${i}`;
            }
        }
        return `La factorielle de ${dep}, notée ${dep}!, vaut :<br>${phrase} = ${fact}.`
    },
    //EXERCICE 14.7
    function funcexo14_7() {
        let donnees = [];
        for (let i = 1; i <= 20; i++) {
            donnees.push(Number(prompt(`Entrez le nombre numéro ${i}`, i)));
        }
        let maxi = Math.max(...donnees);
        let position = donnees.indexOf(maxi) + 1;
        return `Le plus grand des nombres donnés est : ${maxi}, c'était le nombre numéro ${position}`;
    },
    //EXERCICE 14.8
    function funcexo14_8() {
        let donnees = [];
        let nombre;
        let i = 1;

        do {
            nombre = Number(prompt(`Entrez le nombre numéro ${i} (0 pour arrêter)`));
            if (nombre !== 0) {
                donnees.push(nombre);
                i++;
            }
        } while (nombre !== 0);

        if (donnees.length === 0) {
            return "Aucun nombre n'a été saisi.";
        }

        let maxi = Math.max(...donnees);
        let position = donnees.indexOf(maxi) + 1;

        return `Le plus grand des nombres donnés est : ${maxi}, c'était le nombre numéro ${position}`;
    },
    //EXERCICE 14.9
    function funcexo14_9() {
        let prix = [];
        let prixSaisi;
        let i = 1;
        do {
            prixSaisi = Number(prompt(`Entrez le prix numéro ${i} (0 pour arrêter)`));
            if (prixSaisi !== 0) {
                prix.push(prixSaisi);
                i++;
            }
        } while (prixSaisi !== 0);

        // Calcul de la somme totale
        let somme = 0;
        for (let p of prix) {
            somme += p;
        }
        let resultat = `Le client doit payer : ${somme} euros<br>`;

        // Lecture de la somme payée
        let paye = Number(prompt(`Le client doit payer ${somme} euros. Combien paye-t-il ?`, somme));

        // Calcul de la monnaie à rendre
        let monnaie = paye - somme;
        if (monnaie < 0) {
            resultat += `Il manque ${-monnaie} euros, le paiement est insuffisant.`;
            return resultat;
        }
        resultat += `Le client a payé ${paye}, monnaie à rendre : ${monnaie} euros, soit:<br>`;

        // Simulation de la remise de monnaie
        let nbBillets10 = Math.floor(monnaie / 10);
        monnaie = monnaie % 10;
        let nbBillets5 = Math.floor(monnaie / 5);
        monnaie = monnaie % 5;
        let nbPieces1 = monnaie;
        for (let j = 0; j < nbBillets10; j++) {
            resultat += "10 Euros<br>";
        }
        for (let j = 0; j < nbBillets5; j++) {
            resultat += "5 Euros<br>";
        }
        for (let j = 0; j < nbPieces1; j++) {
            resultat += "1 Euro<br>";
        }
        return resultat;
    },
    //EXERCICE 15
    function funcexo15() {
        let n = Number(prompt("Nombre de chevaux partants ?"));
        let p = Number(prompt("Nombre de chevaux joués ?"));
        // Calcul de X = n! / (n-p)!
        // Astuce : n! / (n-p)! = n × (n-1) × (n-2) × ... × (n-p+1)
        let X = 1;
        for (let i = 0; i < p; i++) {
            X *= (n - i);
        }
        // Calcul de Y = X / p!
        let factP = 1;
        for (let i = 1; i <= p; i++) {
            factP *= i;
        }
        let Y = X / factP;
        let resultat = `Dans l'ordre : une chance sur ${X} de gagner.<br>`;
        resultat += `Dans le désordre : une chance sur ${Y} de gagner.`;
        return resultat;
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




