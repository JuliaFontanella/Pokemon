class Pokemon {   // on créer une classe Pokemon avec les paramètres donnés
    constructor (name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    attackPokemon(){      // on créer la fonction d'attaque
        if (this.isLucky()){        // si isLucky est vérifiée alors
            let degats = this.attack - this.defense         // on applique la formule de dégats (je sais pas comment afficher les Hp moins les dégats ? )
            this.hp =- degats
            if (degats > 0) {
            console.log (this.name + "a pris " + degats + " de dégats, il lui reste " + this.hp + "de points de vie")}
             else if { // si les dégats sont < 0 alors il n'a pas infligé de dégats 
                console.log (this.Pokemon + " n'a pas infligé de dégat")
            }  
        }
    }

    }
    isLucky(){
        return Math.random() < this.luck // la fonction isLucky compare la luck du Pokemon à un chiffre aléatoire

    }

let pikachu = new Pokemon (" Pikachu", 5, 7, 12, 0.4 ) // on créer les deux Pokemon
let dracaufeu = new Pokemon (" Dracaufeu", 7, 5, 10, 0.6 )

while (pikachu.hp > 0 && dracaufeu.hp > 0) // on créer la boucle de combat tant que les deux Pokemon ont de la vie 
pikachu.attackPokemon(dracaufeu) // on applique la fonction attack pokemon sur dracaufeu
if (dracaufeu.hp <= 0) { // si dracaufeu n'a plus de HP Pikachu gagne 
    console.log ("Dracaufeu est mort, Pikachu gagne !")
    break // la boucle s'arrête
}
dracaufeu.attackPokemon(pikachu)
if (pikachu.hp <= 0) { // si pikacgu n'a plus de HP Dracaufeu gagne 
    console.log ("Pikachu est mort, Dracaufeu gagne !")
    break // la boucle s'arrête
}
