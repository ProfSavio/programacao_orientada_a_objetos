class Jogador {
    constructor(nome, pontuacao, vida) {
        this.nome = nome;
        this.pontuacao = pontuacao;
        this.vida = vida;
    }

    atacar(inimigo, arma) {
        console.log(`${this.nome} ataca o ${inimigo.nome} com ${arma.nome} causando ${arma.dano} de dano!`);
        inimigo.receberDano(arma.dano, this);
    }

    receberDano(dano) {
        this.vida -= dano;
        if(this.vida < 0) this.vida = 0;
        console.log(`${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);
    }

    ganharPontos(pontos) {
        this.pontuacao += pontos;
        console.log(`${this.nome} ganhou ${pontos} pontos! Total: ${this.pontuacao}`);
    }
}

class Inimigo {
    constructor(nome, vida, dano) {
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
    }

    atacar(jogador) {
        console.log(`O ${this.nome} ataca ${jogador.nome} causando ${this.dano} de dano!`);
        jogador.receberDano(this.dano);
    }

    receberDano(dano, jogador) {
        this.vida -= dano;
        if(this.vida < 0) {
            this.vida = 0;
            jogador.ganharPontos(100); // O jogador ganha pontos ao derrotar um inimigo
            console.log(`O ${this.nome} foi derrotado!`);
        } else {
            console.log(`O ${this.nome} recebeu ${dano} de dano! Vida restante: ${this.vida}`);
        }
    }


}

class Arma {
    constructor(nome, dano) {
        this.nome = nome;
        this.dano = dano;
    }
}

// Instanciando Jogadores
const stein = new Jogador("Stein", 0, 100);
const shinigamiSama = new Jogador("Shinigami-sama", 0, 500);
const maka = new Jogador("Maka", 0, 50);

// Instanciando Armas
const foice = new Arma("Foice", 10);
const deathScythe = new Arma("Death Scythe", 25);
const shinigamiChop = new Arma("Shinigami Chop", 50);

// Instanciando Inimigos
const pierro = new Inimigo("Pierro", 100, 20);
const medusa = new Inimigo("Medusa", 200, 30);
const asura = new Inimigo("Asura", 300, 40);

// Simulação de Ataques
maka.atacar(pierro, foice);
pierro.atacar(maka);

stein.atacar(medusa, deathScythe);
medusa.atacar(stein);

shinigamiSama.atacar(asura, shinigamiChop);
asura.atacar(shinigamiSama);

// Simulação de Pontuação
console.log('--- Simulação de Pontuação ---');
shinigamiSama.atacar(pierro, shinigamiChop);
shinigamiSama.atacar(pierro, shinigamiChop);
console.log(`Pontuação de ${shinigamiSama.nome}: ${shinigamiSama.pontuacao}`);