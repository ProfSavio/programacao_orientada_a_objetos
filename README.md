# Programação Orientada a Objetos

**Definição**: A programação orientada a objetos (POO) é um paradigma de programação que organiza o código em "objetos" que combinam dados (atributos) e comportamentos (métodos), simulando o mundo real.

A seguir, alguns dos conceitos basilares de POO:
---
## 1. Classe
Uma classe é um **molde/modelo para criar objetos**, é ela que define como serão os objetos.
| Mundo real | Programação |
|------------|-------------|
| Planta de uma casa | Classe | 
| Casa construida | Objetos |

Exemplo de código em JavaScript:
```js
class Personagem {
    nome = "";
    vida = 100;

    atacar() {
        // o `this` é um é uma palavra-chave que referencia o objeto atual
        // que está executando o código. 
        // Ele permite acessar atributos (variáveis) e métodos da própria instância,
        // diferenciando-os de parâmetros locais com o mesmo nome. 
        console.log(this.nome + " atacou!");
    }
}
```
---
## 2. Objeto
Um objeto é uma **instância criada a partir de uma classe**.
| Classe | Objetos |
| ------ | ------- |
| Personagem | Herói, Inimigo, NPC |

Exemplo de código em JavaScript:
```js
class Personagem {
    nome = "";
    vida = 100;

    atacar() {
        console.log(this.nome + " atacou!");
    }
}

// O comando `new` é responsável por alocar memória 
// dinamicamente e chamar o construtor da classe. 
let heroi = new Personagem();

// Adicionamos a string `Guerreiro` ao atributo `nome`
heroi.nome = "Guerreiro";

heroi.atacar();
// O output será "Guerreiro atacou!"
```
---
## 3. Atributos
Atributos são as **características ou propriedades de um objeto**.
| Objeto | Atributo |
| ------ | ------- |
| Personagem | vida, nome, força |
| Carro | cor, velocidade, modelo |

Exemplo de código em JavaScript:
```js
class Personagem {
    nome = "";
    vida = 100;
    forca = 10;
}
```
---
## 4. Métodos
Métodos são **ações que um objeto pode realizar**.
> Podemos dizer que os métodos são as *funções* vinculadas aquela classe e definirá os comportamentos do objeto.

| Objetos | Métodos |
| ------ | ------- |
| Personagem | atacar(), pular(), correr() |
| Carro | acelerar(), frear(), buzinar() |

Exemplo de código em JavaScript:
```js
class Personagem {
    nome = "";
    vida = 100;

    atacar() {
        console.log(this.nome + " atacou!");
    }
}
```
---
## 5. Construtor
O construtor é um **método especial** usado para **definir valores iniciais quando o objeto é criado**, ele é executado automaicamente ao instanciar um objeto.
> Podemos dizer que o construtor é como o momento em que você configura um personagem ao iniciar um jogo

Exemplo de código em JavaScript:
```js
class Personagem {
    
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
}

let heroi = new Personagem("Guerreiro", 120);
let inimigo = new Personagem("Orc", 80);
// Agora cada objeto já nasce com valores iniciais definidos.
```
---
# Pilares da Programação Orientada a Objetos (POO)

## 1. Abstração
Consiste em representar apenas as **caracteristicas essenciais** de um objeto, ocultando detalhes complexos.

```js
class Personagem {
    constructor(nome) {
        this.nome = nome;
    }

    atacar() {
        console.log(`${this.nome} ataca`);
    }

    defender() {
        console.log(`${this.nome} se defende`);
    }

    usarHabilidade() {
        console.log(`${this.nome} usa habilidade especial`);
    }
}
```

## 2. Encapsulamento
É o conceito de **proteger os dados de um objeto**, permitindo acesso apenas por meio de métodos definidos.

```js
class Personagem {
    #vida;

    constructor(nome, vidaInicial) {
        this.nome = nome;
        this.#vida = vidaInicial;
    }

    receberDano(dano) {
        this.#vida -= dano;
    }

    verVida() {
        console.log(`${this.nome} tem ${this.#vida} de vida`);
    }
}
```

## 3. Herança
Permite que uma classe filho **herde os atributos e métodos** de uma classe pai

```js
class Personagem {
    constructor(nome, nivel) {
        this.nome = nome;
        this.nivel = nivel;
    }

    apresentar() {
        console.log(`${this.nome} - Nível ${this.nivel}`);
    }
}

class Guerreiro extends Personagem {
    constructor(nome, nivel, forca) {
        super(nome, nivel);
        this.forca = forca;
    }

    ataquePesado() {
        console.log(`${this.nome} realiza um ataque pesado com força de ${this.forca}`);
    }
}
```

## 4. Polimorfismo
Permite que um **mesmo método** tenha **comportamentos diferentes**, dependendo do objeto que o utiliza.

```js
class Personagem {
    constructror(nome) {
        this.nome = nome;
    }

    atacar() {
        console.log(`${this.nome} realiza um ataque básico`);
    }
}

class Arqueiro extends Personagem {
    constructor(nome, flechas) {
        super(nome);
        this.flechas = flechas;
    }

    atacar() {
        console.log(`${this.nome} dispara uma flecha. Flechas restantes ${this.flechas}`);
    }
}

class Mago extends Personagem {
    constructor(nome, mana) {
        super(nome);
        this.mana = mana;
    }

    atacar() {
        console.log(`${this.nome} lança uma magia. Mana restante: ${this.mana}`);
    }
}
```