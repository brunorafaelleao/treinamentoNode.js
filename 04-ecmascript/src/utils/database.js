//criar a funcao a ser exportada
async function connectToDatabase(dataName) {
  console.log(`conectado ao banco ${dataName}`);
}

async function disconnectToDatabase(dataName) {
  console.log(`desconectado do banco ${dataName}`);
}
// exportar a funcao para ser usada em outros arquivos
// export default connectToDatabase;

//exportando as funcoes para serem usadas em outros arquivos
export { connectToDatabase, disconnectToDatabase };
