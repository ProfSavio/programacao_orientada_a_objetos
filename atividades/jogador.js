class Jogador {
    constructor(nome, pontuacao) {
        this.nome = nome;
        this.pontuacao = pontuacao;
    }

    ganharPontos(pontos) {
        this.pontuacao += pontos;
        console.log(`${this.nome} ganhou ${pontos} pontos! Total: ${this.pontuacao}`);
    }
}

const jogador1 = new Jogador("Stein", 0);
const jogador2 = new Jogador("Shinigami-sama", 0);
const jogador3 = new Jogador("Maka", 0);

jogador1.ganharPontos(10);
jogador2.ganharPontos(15);
jogador3.ganharPontos(20);
