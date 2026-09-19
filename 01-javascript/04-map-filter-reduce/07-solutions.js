const products = [
  { id: 1, title: "Phone", category: "Electronics", price: 20000, stock: 5 },
  { id: 2, title: "Laptop", category: "Electronics", price: 50000, stock: 0 },
  { id: 3, title: "Shirt", category: "Fashion", price: 1200, stock: 10 },
  { id: 4, title: "Watch", category: "Fashion", price: 3000, stock: 3 }
];

const titles = products.map(product => product.title);

const withTax = products.map(product => ({
  ...product,
  priceWithTax: product.price * 1.18
}));

const inStock = products.filter(product => product.stock > 0);

const affordableElectronics = products.filter(product => {
  return product.category === "Electronics" && product.price < 30000;
});

const totalStockValue = products.reduce((total, product) => {
  return total + product.price * product.stock;
}, 0);

const categoryCount = products.reduce((counts, product) => {
  counts[product.category] = (counts[product.category] ?? 0) + 1;
  return counts;
}, {});

const fashionLabels = products
  .filter(product => product.stock > 0 && product.category === "Fashion")
  .map(product => `${product.title} - ₹${product.price}`);

const inStockPriceTotal = products
  .filter(product => product.stock > 0)
  .reduce((total, product) => total + product.price, 0);

const productsById = products.reduce((lookup, product) => {
  lookup[product.id] = product;
  return lookup;
}, {});

const mostExpensiveInStock = products
  .filter(product => product.stock > 0)
  .reduce((highest, product) => {
    return !highest || product.price > highest.price ? product : highest;
  }, null);

console.log({
  titles,
  withTax,
  inStock,
  affordableElectronics,
  totalStockValue,
  categoryCount,
  fashionLabels,
  inStockPriceTotal,
  productsById,
  mostExpensiveInStock
});

