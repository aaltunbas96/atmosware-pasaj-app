import create from "zustand";

interface StoreState {
  language: "tr" | "en";
  setLanguage: (lang: "tr" | "en") => void;
  getEndpoint: () => string;
  getCMSEndpoint: () => string;
}

export const useLanguageStore = create<StoreState>((set, get) => ({
  language: "tr",
  setLanguage: (lang) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
    set({ language: lang });
  },
  getEndpoint: () => {
    const language = get().language;
    switch (language) {
      case "en":
        return "https://pasaj-back-end.vercel.app/products-en";
      default:
        return "https://pasaj-back-end.vercel.app/products";
    }
  },
  getCMSEndpoint: () => {
    const language = get().language;
    switch (language) {
      case "en":
        return "https://pasaj-back-end.vercel.app/cms-en";
      default:
        return "https://pasaj-back-end.vercel.app/cms";
    }
  },
}));

if (typeof window !== "undefined") {
  const savedLanguage = localStorage.getItem("language") as "tr" | "en" | null;
  if (savedLanguage) {
    useLanguageStore.getState().setLanguage(savedLanguage);
  }
}
