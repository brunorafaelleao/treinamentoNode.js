//base do projeto : https://github.com/digitalinnovationone/formacao-nodejs/tree/main/03-projeto-mario-kart

//NOME DOS JOGADORES -

const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player3 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player4 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};

const player5 = {
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player6 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

//método para receber a escolha do personagem usando o input do usuário.
const lerdados = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*funcao para rolar dados: Dar o nome em ingles e ela vai ter como escopo um método
do JS que retorna sempre valores de 0 ou 1 (random). No caso, vai ser multiplicado por 6 pq o dado tem
6 valores. Mas para arredondar o valor, vai ser colocado um metodo de arredondamento englobando o metodo
random*/
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

//Criar uma função para ser autoinvocada ao iniciar a aplicação

(async function main() {
  console.log("Iniciando simulador do Mário Kart 🏎️ \n");
})();

//início da lógica do jogo:
console.log("Escolha o seu personagem: \n");

console.log(
  "1 - Mario \n2 - Luigi \n3 - Peach \n4 - Yoshi \n5 - Bowser \n6 - Donkey Kong"
);

lerdados.question("Digite o número do personagem: ", (personagem) => {
  switch (personagem) {
    case "1":
      console.log("Seu personagem escolhido foi: Mario \n");
      break;
    case "2":
      console.log("Seu personagem escolhido foi: Luigi \n");
      break;
    case "3":
      console.log("Seu personagem escolhido foi: Peach \n");
      break;
    case "4":
      console.log("Seu personagem escolhido foi: Yoshi \n");
      break;
    case "5":
      console.log("Seu personagem escolhido foi: Bowser \n");
      break;
    case "6":
      console.log("Seu personagem escolhido foi: Donkey Kong \n");
      break;
  }
});
