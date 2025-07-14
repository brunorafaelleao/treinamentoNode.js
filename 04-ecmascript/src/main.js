//importando a funcao connectToDatabase do arquivo database.js
// import connectToDatabase from "./utils/database.js";

//importando todas as funcoes do arquivo database.js
import * as db from "./utils/database.js";

console.log("Funcionando... \n");

//executando a funcao connectToDatabase com o nome do banco de dados
db.connectToDatabase("Saude-Crianca");
db.disconnectToDatabase("Saude-Crianca");
