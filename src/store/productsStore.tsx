import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: string;
  image: string;
  name: string;
  color: string;
  price: number;
}

interface ProductsStore {
  products: Product[];
  addProductToBasket: (item: Product) => void;
  removeProductFromBasket: (id: string) => void;
  getTotalPrice: () => number;
}

export const useProductsStore = create(
  persist<ProductsStore>(
    (set, get) => ({
      products: [],
      addProductToBasket: (item) =>
        set((state) => ({ products: [...state.products, item] })),
      removeProductFromBasket: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
      getTotalPrice: () => {
        const products = get().products;
        return products.reduce((total, product) => total + product.price, 0);
      },
    }),
    {
      name: "products-storage",
    }
  )
);
