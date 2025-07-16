//funcao para obter o nome completo do produto

async function getFullName(codeID, productName) {
console.log( codeID + "--" + productName);
}

//essa funcao sera importada em outro arquivo atraves do module.exports
module.exports = {
  getFullName,
};