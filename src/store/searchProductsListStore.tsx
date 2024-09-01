import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: string;
  productCardImg1: string;
  productCardImg2: string;
  name: string;
  trademark: string;
  color: string;
  point: number;
  price: number;
}

interface SearchProductsListStore {
  productsFromSearch: Product[];
  filteredProducts: Product[];
  selectedTrademarks: string[];
  priceRanges: string[];
  setProductsFromSearch: (items: Product[]) => void;
  setFilteredProducts: (items: Product[]) => void;
  setSelectedTrademarks: (trademarks: string[]) => void;
  setPriceRanges: (ranges: string[]) => void;
  sortProducts: (criteria: "priceAsc" | "priceDesc" | "ratingDesc") => void;
  filterByTrademark: () => void;
  filterByPriceRange: () => void;
  applyFilters: () => void;
}

export const useSearchProductsListStore = create(
  persist<SearchProductsListStore>(
    (set, get) => ({
      productsFromSearch: [],
      filteredProducts: [],
      selectedTrademarks: [],
      priceRanges: [],

      setProductsFromSearch: (items) => {
        set({ productsFromSearch: items });
        get().applyFilters();
      },

      setFilteredProducts: (items) => set({ filteredProducts: items }),

      setSelectedTrademarks: (trademarks) => {
        set({ selectedTrademarks: trademarks });
        get().applyFilters();
      },

      setPriceRanges: (ranges) => {
        set({ priceRanges: ranges });
        get().applyFilters();
      },

      sortProducts: (criteria) => {
        const productsToSort =
          get().filteredProducts.length > 0
            ? [...get().filteredProducts]
            : [...get().productsFromSearch];

        switch (criteria) {
          case "priceAsc":
            productsToSort.sort((a, b) => a.price - b.price);
            break;
          case "priceDesc":
            productsToSort.sort((a, b) => b.price - a.price);
            break;
          case "ratingDesc":
            productsToSort.sort((a, b) => (b.point || 0) - (a.point || 0));
            break;
          default:
            break;
        }

        set({ filteredProducts: productsToSort });
      },

      filterByTrademark: () => {
        const { selectedTrademarks, productsFromSearch } = get();
        const filtered = productsFromSearch.filter(
          (product) =>
            selectedTrademarks.length === 0 ||
            selectedTrademarks.includes(product.trademark)
        );
        set({ filteredProducts: filtered });
      },

      filterByPriceRange: () => {
        const { priceRanges, filteredProducts } = get();
        let productsToFilter =
          filteredProducts.length > 0
            ? filteredProducts
            : get().productsFromSearch;

        if (priceRanges.length > 0) {
          productsToFilter = productsToFilter.filter((product) => {
            return priceRanges.some((range) => {
              switch (range) {
                case "range1":
                  return product.price < 2500;
                case "range2":
                  return product.price >= 2500 && product.price < 25000;
                case "range3":
                  return product.price >= 25000 && product.price < 50000;
                case "range4":
                  return product.price >= 50000;
                default:
                  return false;
              }
            });
          });
        }

        set({ filteredProducts: productsToFilter });
      },

      applyFilters: () => {
        get().filterByTrademark();
        get().filterByPriceRange();
      },
    }),
    {
      name: "search-products-list-storage",
    }
  )
);
