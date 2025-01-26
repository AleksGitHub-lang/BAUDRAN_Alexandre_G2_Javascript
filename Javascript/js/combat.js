class Personnage {
    constructor(nom, vie, attaque, precision) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.precision = precision;
    }

    attaquer(adversaire) {
        if (this.testPrecision()) {
            console.log(this.nom + " attaque " + adversaire.nom + " et inflige " + this.attaque + " dégâts");
            adversaire.vie -= this.attaque;
        } else {
            console.log(this.nom + " rate son attaque sur " + adversaire.nom);
        }
    }

    testPrecision() {
        const chance = Math.random();
        return chance < this.precision;
    }

    estEnVie() {
        return this.vie > 0;
    }
}

// Simulation de combat
const combattant1 = new Personnage("Salomé", 100, 15, 0.5);
const combattant2 = new Personnage("Willy", 100, 20, 0.4);

console.log("Début du combat entre Salomé et Willy !");

while (combattant1.estEnVie() && combattant2.estEnVie()) {
    // Salomé attaque Willy
    combattant1.attaquer(combattant2);
    if (combattant2.estEnVie()) {
        // Willy attaque Salomé
        combattant2.attaquer(combattant1);
    }
}

// Annonce du vainqueur
if (combattant1.estEnVie()) {
    console.log("Le combat est terminé ! " + combattant1.nom + " est le vainqueur avec " + combattant1.vie + " points de vie restants.");
} else {
    console.log("Le combat est terminé ! " + combattant2.nom + " est le vainqueur avec " + combattant2.vie + " points de vie restants.");
}
