class Carro {
    constructor(marca, velocidade) {
        this.marca = marca;
        this.velocidade = velocidade;
    }

    acelerar() {
        const velocidadeAtual = this.velocidade + 10;
        console.log(`A velocidade do ${this.marca} era ${this.velocidade} km/h e agora é ${velocidadeAtual} km/h.`);
    }
}

const carro1 = new Carro('Ford', 100);
const carro2 = new Carro('Chevrolet', 120);

carro1.acelerar();
carro2.acelerar();