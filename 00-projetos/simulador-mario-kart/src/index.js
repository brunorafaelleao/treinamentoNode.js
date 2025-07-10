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

//array das pistas
blocosDePista = ["Reta", "Curva", "Confronto"];

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
    lerdados.question("Digite o número do personagem: ", async (value) => {
      const index = parseInt(value) - 1;

      if (index >= 0 && index < idJogadores.length) {
        const personagemEscolhido = idJogadores[index];

        // Sorteia adversário diferente
        let index2;
        do {
          index2 = Math.floor(Math.random() * idJogadores.length);
        } while (index2 === index);

        const adversario = idJogadores[index2];

        console.log(
          `\nSeu personagem escolhido foi: ${personagemEscolhido.NOME}`
        );
        console.log(`Seu adversário será: ${adversario.NOME}\n`);

        for (let rodada = 1; rodada <= 5; rodada++) {
          const blocoRodada =
            blocosDePista[Math.floor(Math.random() * blocosDePista.length)];
          console.log(`🏁 Rodada ${rodada}: Bloco da pista: ${blocoRodada}`);

          let meusPontos = 0;
          let pontosAdversario = 0;

          if (blocoRodada === "Reta") {
            meusPontos = personagemEscolhido.VELOCIDADE + (await rollDice());
            pontosAdversario = adversario.VELOCIDADE + (await rollDice());
          } else if (blocoRodada === "Curva") {
            meusPontos =
              personagemEscolhido.MANOBRABILIDADE + (await rollDice());
            pontosAdversario = adversario.MANOBRABILIDADE + (await rollDice());
          } else if (blocoRodada === "Confronto") {
            meusPontos = personagemEscolhido.PODER + (await rollDice());
            pontosAdversario = adversario.PODER + (await rollDice());
          }

          console.log(`${personagemEscolhido.NOME} tirou ${meusPontos} pontos`);
          console.log(`${adversario.NOME} tirou ${pontosAdversario} pontos`);

          if (blocoRodada === "Confronto") {
            if (meusPontos > pontosAdversario) {
              adversario.PONTOS = Math.max(0, adversario.PONTOS - 1);
              console.log(`${personagemEscolhido.NOME} ganhou o confronto!\n`);
            } else if (meusPontos < pontosAdversario) {
              personagemEscolhido.PONTOS = Math.max(
                0,
                personagemEscolhido.PONTOS - 1
              );
              console.log(`${adversario.NOME} ganhou o confronto!\n`);
            } else {
              console.log("Empate no confronto!\n");
            }
          } else {
            if (meusPontos > pontosAdversario) {
              personagemEscolhido.PONTOS++;
              console.log(
                `${personagemEscolhido.NOME} ganhou a rodada ${rodada}!\n`
              );
            } else if (meusPontos < pontosAdversario) {
              adversario.PONTOS++;
              console.log(`${adversario.NOME} ganhou a rodada ${rodada}!\n`);
            } else {
              console.log(`Empate na rodada ${rodada}!\n`);
            }
          }
        }

        // Resultado final
        console.log("🏆 Placar Final:");
        console.log(
          `${personagemEscolhido.NOME}: ${personagemEscolhido.PONTOS} pontos`
        );
        console.log(`${adversario.NOME}: ${adversario.PONTOS} pontos`);

        if (personagemEscolhido.PONTOS > adversario.PONTOS) {
          console.log(`\n🎉 ${personagemEscolhido.NOME} venceu a corrida!\n`);
        } else if (personagemEscolhido.PONTOS < adversario.PONTOS) {
          console.log(`\n💥 ${adversario.NOME} venceu a corrida!\n`);
        } else {
          console.log("\n⚔️ A corrida terminou em empate!\n");
        }

        lerdados.close();
        return resolve(personagemEscolhido);
      } else {
        console.log(
          "\nNúmero inválido! Por favor, digite um número entre 1 e 6.\n"
        );
        return resolve(escolherPersonagem());
      }
    });
  });
}

//Criar uma função para ser autoinvocada ao iniciar a aplicação

(async function main() {
  console.log(
    "Iniciando simulador do Mário Kart 🏎️ \nFaremos uma partida de 5 rodadas.\nBoa sorte!!!\n"
  );
  //início da lógica do jogo:
  console.log(
    "Escolha o seu personagem para uma corrida de 5 rodadas. Boa Sorte!: \n"
  );

  console.log(
    "1 - Mario \n2 - Luigi \n3 - Peach \n4 - Yoshi \n5 - Bowser \n6 - Donkey Kong"
  );

  escolherPersonagem();
})();
