type Product = {
  name: string;
  price: string;
  image: string;
  description: string;
};

export const setStore = (product: Product, count: number) => {
  const storageJSON = localStorage.getItem("cart") ?? "{}";
  const storage = JSON.parse(storageJSON);

  const productInCart = { count, product };
  storage[product.name] = productInCart;

  localStorage.setItem("cart", JSON.stringify(storage));
};
