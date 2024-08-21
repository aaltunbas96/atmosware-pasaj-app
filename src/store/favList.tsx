import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: string;
  productCardImg1: string;
  productCardImg2: string;
  name: string;
  color: string;
  point: number;
  price: number;
}

interface FavListStore {
  favProducts: Product[];
  addProductToFavList: (item: Product) => void;
  removeProductFromFavList: (id: string) => void;
  clearFavList: () => void;
}

export const useFavListStore = create(
  persist<FavListStore>(
    (set) => ({
      favProducts: [],
      addProductToFavList: (item) =>
        set((state) => ({ favProducts: [...state.favProducts, item] })),
      removeProductFromFavList: (id) =>
        set((state) => ({
          favProducts: state.favProducts.filter((product) => product.id !== id),
        })),
      clearFavList: () => set({ favProducts: [] }),
    }),
    { name: "fav-list-storage" }
  )
);
