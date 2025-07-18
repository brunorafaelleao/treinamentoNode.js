import * as cart from "./services/cart.js";
import createItem from "./services/itens.js";

const myCart = [];

console.log("Bem vindo ao carrinho Shopee!");

const item1 = await createItem("Tênis", 200, 2);
const item2 = await createItem("Camisa", 50, 3);

// console.log(`Item adicionado: ${item1.name}
//   Preço Unitário: ${item1.price}
//   Quantidade: ${item1.quantity}
//   Subtotal: ${item1.subtotal()}
//   `);
await cart.addToItem(myCart, item1);
await cart.addToItem(myCart, item2);
// console.log("Itens no carrinho:", item1.name, item2.name);
await cart.deleteItem(myCart, item1.name);
await cart.showItems(myCart);

await cart.deleteItem(myCart, item1.name);

console.log("Total do carrinho:");
await cart.calculateTotal(myCart);
