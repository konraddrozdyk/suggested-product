type Product = {
  name: string;
  price: string;
  image: string;
  description: string;
};

export const setStore = (product: Product, count: number) => {
  const storageJSON = localStorage.getItem("cart") ?? "{}";
  const cart = JSON.parse(storageJSON);
};
