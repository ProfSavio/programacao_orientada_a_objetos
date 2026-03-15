// Caso você queira executar esse código atraves do codespaces, basta executar no terminal o comando "node [nome_do_seu_arquivo.js]"

class Personagem {
    constructor(nome, vida, forca) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

    atacar(alvo) {
        alvo.vida = alvo.vida - this.forca
        console.log(this.nome + " atacou causando " + this.forca + " de dano");
    }
}

let heroi = new Personagem("Guerreiro", 120, 25);
let inimigo = new Personagem("Orc", 80, 15);

console.log(`Pontos de vida do ${inimigo.nome}: ${inimigo.vida}`);
heroi.atacar(inimigo);
console.log(`Pontos de vida do ${inimigo.nome}: ${inimigo.vida}`);