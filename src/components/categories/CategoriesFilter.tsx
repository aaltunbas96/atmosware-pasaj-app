import { useSearchProductsListStore } from "@/store/searchProductsListStore";
import React, { useState, useEffect } from "react";

export default function CategoriesFilter() {
  const {
    sortProducts,
    setSelectedTrademarks,
    setPriceRanges,
    selectedTrademarks,
    priceRanges,
  } = useSearchProductsListStore();

  const [localSelectedTrademarks, setLocalSelectedTrademarks] = useState<
    string[]
  >([]);
  const [localPriceRanges, setLocalPriceRanges] = useState<string[]>([]);

  useEffect(() => {
    setLocalSelectedTrademarks(selectedTrademarks);
  }, [selectedTrademarks]);

  useEffect(() => {
    setLocalPriceRanges(priceRanges);
  }, [priceRanges]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "priceAsc":
        sortProducts("priceAsc");
        break;
      case "priceDesc":
        sortProducts("priceDesc");
        break;
      case "ratingDesc":
        sortProducts("ratingDesc");
        break;
      default:
        break;
    }
  };

  const handleTrademarkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setLocalSelectedTrademarks((prev) => {
      const updatedTrademarks = checked
        ? [...prev, value]
        : prev.filter((trademark) => trademark !== value);
      setSelectedTrademarks(updatedTrademarks);
      return updatedTrademarks;
    });
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setLocalPriceRanges((prev) => {
      const updatedPriceRanges = checked
        ? [...prev, value]
        : prev.filter((range) => range !== value);
      setPriceRanges(updatedPriceRanges);
      return updatedPriceRanges;
    });
  };

  return (
    <div className="c-b-filter-side-bar flex flex-col xs:pr-0 md:pr-2.5">
      <div className="sort flex relative xs:pl-6 md:pl-0">
        <select
          name=""
          id=""
          className="outline-none w-full bg-[#f5f7f9] border-[1px] border-[#dce1e6] rounded-lg shadow-[0_0.375rem_0.75rem_-0.25rem_rgba(37,51,66,0.2)] mb-5 py-4 pr-5 pl-6 text-[#8e9fad] leading-[1.6rem] appearance-none cursor-pointer"
          onChange={handleSortChange}
        >
          <option value="" disabled selected className="text-[#253342]">
            Sırala
          </option>
          <option value="priceAsc" className="text-[#253342]">
            En Düşük Fiyat
          </option>
          <option value="priceDesc" className="text-[#253342]">
            En Yüksek Fiyat
          </option>
          <option value="ratingDesc" className="text-[#253342]">
            En Yüksek Puan
          </option>
        </select>
        <span className="text-[#8e9fad] relative right-[3rem] top-[1rem] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div className="trademarks flex relative xs:pl-6 md:pl-0">
        <div className="w-full bg-[#f5f7f9] border-[1px] border-[#dce1e6] rounded-lg shadow-[0_0.375rem_0.75rem_-0.25rem_rgba(37,51,66,0.2)] mb-5 py-4 pr-5 pl-6 text-[#8e9fad] leading-[1.6rem] cursor-pointer">
          Markalar
          <div className="flex flex-col mt-2.5 text-[#253342]">
            {["Apple", "Roborock", "Philips", "Samsung"].map((trademark) => (
              <div className="flex gap-2" key={trademark}>
                <input
                  type="checkbox"
                  value={trademark}
                  id={trademark}
                  checked={localSelectedTrademarks.includes(trademark)}
                  onChange={handleTrademarkChange}
                />
                <label htmlFor={trademark}>{trademark}</label>
              </div>
            ))}
          </div>
        </div>
        <span className="text-[#8e9fad] relative right-[3rem] top-[1rem] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div className="price-ranges flex relative xs:pl-6 md:pl-0">
        <div className="w-full bg-[#f5f7f9] border-[1px] border-[#dce1e6] rounded-lg shadow-[0_0.375rem_0.75rem_-0.25rem_rgba(37,51,66,0.2)] mb-5 py-4 pr-5 pl-6 text-[#8e9fad] leading-[1.6rem] cursor-pointer">
          Fiyat Aralığı
          <div className="flex flex-col mt-2.5 text-[#253342]">
            {["range1", "range2", "range3", "range4"].map((range) => (
              <div className="flex gap-2" key={range}>
                <input
                  type="checkbox"
                  value={range}
                  id={range}
                  checked={localPriceRanges.includes(range)}
                  onChange={handlePriceRangeChange}
                />
                <label htmlFor={range}>
                  {range === "range1"
                    ? "0 - 2.500 ₺"
                    : range === "range2"
                    ? "2.500 - 25.000 ₺"
                    : range === "range3"
                    ? "25.000 - 50.000 ₺"
                    : "50.000 ₺ ve Üzeri"}
                </label>
              </div>
            ))}
          </div>
        </div>
        <span className="text-[#8e9fad] relative right-[3rem] top-[1rem] cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
