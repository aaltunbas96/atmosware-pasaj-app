import { useLanguageStore } from "@/store/languageStore";
import { useEffect } from "react";

function useGetLanguage() {
  const { setLanguage } = useLanguageStore();

  useEffect(() => {
    const savedLanguage =
      typeof window !== "undefined"
        ? (localStorage.getItem("language") as "tr" | "en")
        : null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, [setLanguage]);
}

export default useGetLanguage;
