class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        this.verifyTipo = this.tipo.toLowerCase()
        if (this.verifyTipo === "mago"){
            this.ataque = "magia"
        } else if (this.verifyTipo === "guerreiro"){
            this.ataque = "espada"
        } else if (this.verifyTipo === "monge"){
            this.ataque = "artes marciais"
        } else if (this.verifyTipo === "ninja"){
            this.ataque = "shuriken"
        }
        console.log(`${this.tipo} atacou usando ${this.ataque}`)
    }
}

let mago = new heroi("Gandalf", 65, "Mago")
mago.atacar()

let guerreiro = new heroi("Aragorn", 38, "Guerreiro")
guerreiro.atacar()

let monge = new heroi("Shaolin", 30, "Monge")
monge.atacar()

let ninja = new heroi("Snake Eyes", 28, "Ninja")
ninja.atacar()