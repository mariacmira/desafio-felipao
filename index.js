// Declaração das variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = "Arthur"; // Insira o nome do herói
let xpHeroi = 7200; // Insira a quantidade de experiência do herói

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para determinar o nível com base no XP
if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (xpHeroi <= 5000) {
  nivel = "Prata";
} else if (xpHeroi <= 7000) {
  nivel = "Ouro";
} else if (xpHeroi <= 8000) {
  nivel = "Platina";
} else if (xpHeroi <= 9000) {
  nivel = "Ascendente";
} else if (xpHeroi <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
