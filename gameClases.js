class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        // Define o ataque com base no tipo do herói
        const ataques = {
            "mago": "usou magia",
            "guerreiro": "usou espada",
            "monge": "usou artes marciais",
            "ninja": "usou shuriken"
        };

        // Recupera o ataque apropriado para o tipo do herói
        const ataque = ataques[this.tipo] || "realizou um ataque padrão";

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso
const heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar(); // Saída:
