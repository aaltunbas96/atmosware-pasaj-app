import { useProductsStore } from "@/store/products";
import React from "react";

export interface Product {
  id: string;
  image: string;
  name: string;
  color: string;
  price: number;
}

interface BasketCardProps {
  product: Product;
}

export default function BasketCard({ product }: BasketCardProps) {
  const { id, image, name, color, price } = product;
  const { removeProductFromBasket } = useProductsStore();

  return (
    <div className="basket-card mb-[1.1875rem] border-[1px] border-[#dee3ed] rounded-[0.625rem]">
      <div className="b-c-head flex flex-wrap justify-between py-6 pr-[1.875rem] pl-3 relative">
        <button
          onClick={(e) => {
            e.preventDefault();
            removeProductFromBasket(id);
          }}
          className="p-0.5 absolute right-5 top-2.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 text-[#5f6b76]"
          >
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
        <a
          href="#"
          className="flex justify-center xs:w-full md:w-[15.625rem] xs:pb-4 md:pb-0"
        >
          <img src={image} alt="Ürün Resmi" className="w-[5.9375rem]" />
          <p className="text-left mt-[5px] leading-[1.2rem]">
            {name}
            <span className="text-[#8e9fad] block mt-0.5">{color}</span>
          </p>
        </a>
        <div className="b-c-col flex flex-col xs:items-center md:items-start xs:w-full md:w-[8.75rem] xs:pb-4 md:pb-0">
          <span className="text-sm text-[#8e9fad] leading-[1.4rem] mb-1 mt-1.5">
            Birim Fiyat
          </span>
          <span className="mb-1 text-lg text-[#8e9fad] leading-[1.1rem]">
            {price.toLocaleString("tr-TR")} TL
          </span>
          <span className="text-lg text-[#00bafc] leading-[1.1rem]">0 TL</span>
        </div>
        <div className="b-c-col flex flex-col items-center xs:w-full md:w-[8.75rem] xs:pb-4 md:pb-0">
          <span className="text-sm leading-[1.4rem] mb-1 mt-1.5">Adet</span>
          <div className="b-c-counter flex mt-2.5 py-[3px] px-2 border-[1px] border-[#ecf0f2] rounded-2xl">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-[#979797]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </a>
            <input
              readOnly
              value="1"
              type="number"
              name=""
              id=""
              className="max-w-[2.1875rem] text-center outline-none xs:pl-1 md:pl-3.5"
            />
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 text-[#979797]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="b-c-col flex flex-col xs:items-center md:items-end xs:w-full md:w-[8.75rem] text-end">
          <span className="text-sm leading-[1.4rem] mb-1 mt-1.5">Tutar</span>
          <span className="mb-1 text-lg leading-[1.1rem]">
            {price.toLocaleString("tr-TR")} TL
          </span>
        </div>
      </div>
      <div className="b-c-foot flex items-center justify-end py-[0.6875rem] pr-[1.5625rem] border-t-[1px] border-[#dee3ed] text-xs tracking-normal">
        <span className="text-[#2855ac] pr-5">
          Satıcı: <a href="/">Turkcell Satış A.Ş.</a>
        </span>
        <span className="text-[#8e9fad] border-l-[1px] border-[#dee3ed] pl-5">
          1 İş Gününde Kargoda
        </span>
      </div>
    </div>
  );
}
