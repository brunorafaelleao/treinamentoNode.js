//acoes

//Adicionar produto ao carrinho
async function addToItem(userCart, item) {
  userCart.push(item);
}

//deletar produto do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

//remover um item do carrinho
async function removeItem(userCart, index) {}

//calcular total do carrinho
async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

//exibir itens do carrinho
async function showItems(userCart) {
  console.log("Itens no carrinho:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - Preço: ${item.price} | Quantidade: ${item.quantity} - Subtotal: ${item.subtotal()}`
    );
  });
}

export { addToItem, deleteItem, removeItem, calculateTotal, showItems };
