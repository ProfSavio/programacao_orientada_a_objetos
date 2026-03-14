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