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

//id dos jogadores
idJogadores = [player1, player2, player3, player4, player5, player6];

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

//função recursiva da escolha do personagem até que escolha um correto
function escolherPersonagem() {
  return new Promise((resolve) => {
    lerdados.question("Digite o número do personagem: ", (value) => {
      let personagemEscolhido;

      switch (value) {
        case "1":
          index = value - 1;
          personagemEscolhido = idJogadores[index];
          index2 = Math.floor(Math.random() * idJogadores.length);
          adversario = idJogadores[index2];
          console.log(
            `Seu personagem escolhido foi: ${personagemEscolhido.NOME} e você vai competir com ${adversario.NOME} \n`
          );
          return resolve(personagemEscolhido);

        case "2":
          index = value - 1;
          personagemEscolhido = idJogadores[index];
          index2 = Math.floor(Math.random() * idJogadores.length);
          adversario = idJogadores[index2];
          console.log(
            `Seu personagem escolhido foi: ${personagemEscolhido.NOME} e você vai competir com ${adversario.NOME} \n`
          );
          return resolve(personagemEscolhido);

        case "3":
          index = value - 1;
          personagemEscolhido = idJogadores[index];
          index2 = Math.floor(Math.random() * idJogadores.length);
          adversario = idJogadores[index2];
          console.log(
            `Seu personagem escolhido foi: ${personagemEscolhido.NOME} e você vai competir com ${adversario.NOME} \n`
          );
          return resolve(personagemEscolhido);

        case "4":
          index = value - 1;
          personagemEscolhido = idJogadores[index];
          index2 = Math.floor(Math.random() * idJogadores.length);
          adversario = idJogadores[index2];
          console.log(
            `Seu personagem escolhido foi: ${personagemEscolhido.NOME} e você vai competir com ${adversario.NOME} \n`
          );
          return resolve(personagemEscolhido);
        case "5":
          index = value - 1;
          personagemEscolhido = idJogadores[index];
          index2 = Math.floor(Math.random() * idJogadores.length);
          adversario = idJogadores[index2];
          console.log(
            `Seu personagem escolhido foi: ${personagemEscolhido.NOME} e você vai competir com ${adversario.NOME} \n`
          );
          return resolve(personagemEscolhido);

        case "6":
          index = value - 1;
          personagemEscolhido = idJogadores[index];
          index2 = Math.floor(Math.random() * idJogadores.length);
          adversario = idJogadores[index2];
          console.log(
            `Seu personagem escolhido foi: ${personagemEscolhido.NOME} e você vai competir com ${adversario.NOME} \n`
          );
          return resolve(personagemEscolhido);

        default:
          console.log(
            "\nNúmero inválido! Por favor, digite um número entre 1 e 6.\n"
          );
          // Chama novamente e retorna o resultado da nova Promise
          return resolve(escolherPersonagem());
      }
    });
  });
}

//Criar uma função para ser autoinvocada ao iniciar a aplicação

(async function main() {
  console.log("Iniciando simulador do Mário Kart 🏎️ \n");
  //início da lógica do jogo:
  console.log("Escolha o seu personagem: \n");

  console.log(
    "1 - Mario \n2 - Luigi \n3 - Peach \n4 - Yoshi \n5 - Bowser \n6 - Donkey Kong"
  );

  escolherPersonagem();
})();
