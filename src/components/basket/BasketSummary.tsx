import { useProductsStore } from "@/store/productsStore";
import React from "react";

export default function BasketSummary() {
  const { products, getTotalPrice } = useProductsStore();
  const totalPrice = getTotalPrice();

  return (
    <div className="b-summary flex flex-col border-[1px] border-[#dce1e6] rounded-[0.625rem] shadow-[0_6px_12px_-4px_rgba(37,51,66,0.2)] bg-[#f5f7f9]">
      <div className="b-s-head pt-6 px-5 pb-[1.0625rem] border-b-[1px] border-b-[#dce1e6]">
        <h2 className="text-lg leading-[1.78rem]">
          Sipariş Özeti
          <span className="text-base ml-[5px]">({products.length} Ürün)</span>
        </h2>
        <div className="b-s-h-total-price flex justify-between items-center text-sm leading-4 mt-[1.5625rem]">
          Ürünler Toplamı
          <span className="text-lg leading-[1.125rem]">
            <span className="text-base">
              {totalPrice.toLocaleString("tr-TR")} TL
            </span>
          </span>
        </div>
      </div>
      <div className="b-s-body pt-[0.9375rem] px-5 pb-5">
        <div className="b-s-b-shipping flex justify-between items-center text-sm leading-4">
          Kargo Tutarı
          <span className="text-lg leading-[1.125rem]">
            <span className="text-base">Ücretsiz</span>
          </span>
        </div>
        <div className="b-s-b-discount flex justify-between items-center text-[#1bb8f6] text-sm leading-4 mt-[0.9375rem]">
          İndirimler
          <span className="text-lg leading-[1.125rem]">
            <span className="text-base">0 TL</span>
          </span>
        </div>
        <div className="b-s-b-tax flex justify-between items-center text-sm leading-4 mt-[0.9375rem]">
          Ödenecek Tutar (KDV Dahil)
          <span className="text-lg leading-[1.125rem]">
            <span className="text-base">
              {totalPrice.toLocaleString("tr-TR")} TL
            </span>
          </span>
        </div>
        <div className="b-s-b-button mt-[0.9375rem]">
          <a
            href="#"
            className="flex justify-center items-center min-w-[8.75rem] h-10 bg-[#ffc900] px-6 rounded-[2.5rem] hover:bg-[#ffd917] transition duration-200 ease-in"
          >
            Siparişe Devam Et
          </a>
        </div>
      </div>
    </div>
  );
}
