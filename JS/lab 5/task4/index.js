const products = new Map();
const productNames = new Set();
const productMeta = new WeakMap();
const userOrders = new WeakSet();

let productId = 1;

function show(message) {
  document.getElementById("output").textContent = message;
}

function addProduct() {
  const name = prompt("Назва продукту:");
  const price = parseFloat(prompt("Ціна:"));
  const quantity = parseInt(prompt("Кількість:"));

  if (!name || isNaN(price) || isNaN(quantity)) return;

  const product = { id: productId++, name, price, quantity };
  products.set(product.id, product);
  productNames.add(name);
  productMeta.set(product, { added: new Date() });

  show(`Додано: ${JSON.stringify(product, null, 2)}`);
}

function updateProduct() {
  const id = parseInt(prompt("ID продукту:"));
  if (!products.has(id)) return show("Продукт не знайдено.");

  const product = products.get(id);
  const newPrice = parseFloat(prompt("Нова ціна:", product.price));
  const newQty = parseInt(prompt("Нова кількість:", product.quantity));

  if (!isNaN(newPrice)) product.price = newPrice;
  if (!isNaN(newQty)) product.quantity = newQty;

  productMeta.set(product, { edited: new Date() });
  show(`Оновлено: ${JSON.stringify(product, null, 2)}`);
}

function deleteProduct() {
  const id = parseInt(prompt("ID продукту:"));
  if (products.delete(id)) {
    show(`Продукт з ID ${id} видалено`);
  } else {
    show("Продукт не знайдено.");
  }
}

function searchProduct() {
  const searchName = prompt("Введіть назву:");
  let result = [];

  for (const [id, product] of products.entries()) {
    if (product.name.toLowerCase().includes(searchName.toLowerCase())) {
      result.push(product);
    }
  }

  show(result.length ? JSON.stringify(result, null, 2) : "Нічого не знайдено.");
}

function makeOrder() {
  const id = parseInt(prompt("ID продукту:"));
  const qty = parseInt(prompt("Скільки штук замовити?"));

  const product = products.get(id);
  if (!product || isNaN(qty)) return show("Невірні дані.");

  if (product.quantity < qty) {
    return show("На складі недостатньо товару.");
  }

  product.quantity -= qty;

  const user = {}; // абстрактний користувач
  userOrders.add(user);

  show(`Замовлення оформлено!\nЗалишилось: ${product.quantity}`);
}
