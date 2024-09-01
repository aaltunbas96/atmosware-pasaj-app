import useCms from "@/hooks/useCms";
import useGetLanguage from "@/hooks/useGetLanguage";
import { useLanguageStore } from "@/store/languageStore";
import { useSearchProductsListStore } from "@/store/searchProductsListStore";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

interface Product {
  id: string;
  productCardImg1: string;
  productCardImg2: string;
  name: string;
  trademark: string;
  color: string;
  point: number;
  price: number;
  category: string;
}

function searchProducts(data: Product[], item: string): Product[] {
  let itemLowercase = item.toLowerCase().trim();
  return data.filter(
    (product) =>
      product.name.toLowerCase().includes(itemLowercase) ||
      product.trademark.toLowerCase().includes(itemLowercase) ||
      product.category.toLowerCase().includes(itemLowercase)
  );
}

export default function SearchArea() {
  const { getEndpoint } = useLanguageStore();
  const endpoint = getEndpoint();
  useGetLanguage();
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data } = useQuery(["products"], fetchProducts);
  const { setProductsFromSearch } = useSearchProductsListStore();
  const [searchItem, setSearchItem] = useState("");
  const router = useRouter();
  const cms = useCms();

  const handleOnSearch = useCallback((item: string) => {
    setSearchItem(item);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data && searchItem) {
      const searchResults = searchProducts(data, searchItem);
      setProductsFromSearch(searchResults);
    }

    router.push("/categories");
  };

  const handleOnSelect = (item: Product) => {
    router.push(`/products/${item.id}`);
    setSearchItem("");
  };

  const formatResult = (item: Product) => (
    <>
      <div className="search-area-card xs:border-0 md:border-[1px] md:border-[#dee3ed] rounded-[0.625rem] mr-4 cursor-pointer">
        <div className="s-a-c-head flex flex-wrap xs:justify-center md:justify-between items-center py-3 pr-[0.9375rem] pl-1.5 relative">
          <a
            href="#"
            className="flex items-center xs:gap-1 md:gap-4 xs:max-w-[7.8125rem] md:max-w-[15.625rem]"
          >
            <img
              src={item.productCardImg1}
              alt="Ürün Resmi"
              className="xs:w-[1.484375rem] md:w-[2.96875rem]"
            />
            <p className="text-left leading-[1.2rem]">{item.name}</p>
          </a>
          <div className="s-a-c-col flex flex-col justify-center xs:max-w-[4.375rem] md:max-w-[8.75rem] text-end">
            <span className="text-lg leading-[1.1rem]">
              {item.price.toLocaleString("tr-TR")} TL
            </span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="search-area flex items-center bg-[#eff2f5] md:h-[3.75rem] rounded-lg p-2 xs:w-[15.9375rem] md:w-[42.5rem]">
      <form className="search-area-form grow" onSubmit={handleSubmit}>
        <ReactSearchAutocomplete
          styling={{
            fontFamily: "GreycliffCF-DemiBold",
            placeholderColor: "#8e9fad",
            backgroundColor: "#eff2f5",
            border: "0",
            boxShadow: "0",
            iconColor: "#5f6b76",
            searchIconMargin: "0 0 0 8px",
            clearIconMargin: "0 8px 0 0",
            zIndex: 1,
          }}
          placeholder={cms?.searchAreaPlaceholder}
          items={data || []}
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          autoFocus
          formatResult={formatResult}
          fuseOptions={{
            keys: ["name", "trademark", "category"],
            threshold: 0.5,
          }}
        />
      </form>
    </div>
  );
}
