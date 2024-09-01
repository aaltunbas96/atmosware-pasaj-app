import BasketCard, { Product } from "@/components/basket/BasketCard";
import BasketSummary from "@/components/basket/BasketSummary";
import RootLayout from "@/components/layout/RootLayout";
import { useProductsStore } from "@/store/productsStore";
import React from "react";

export default function basket() {
  const { products } = useProductsStore();

  return (
    <>
      <RootLayout>
        <main>
          <section className="basket mb-20">
            <div className="container">
              {products.length == 0 && (
                <>
                  <div className="b-info-card xs:px-[3.25rem] md:px-[6.5rem]">
                    <div className="flex flex-col items-center mb-[1.875rem] min-h-44 pt-[4.375rem] px-5 pb-5 bg-[#009ed8] rounded-[0.625rem] text-white mt-[3.75rem]">
                      <h3 className="text-[1.625rem] leading-8 mb-[0.9375rem]">
                        Sepetinizde ürün bulunmamaktadır.
                      </h3>
                      <span>
                        Turkcell'in avantajlı dünyasından faydalanmak için hemen
                        alışverişe başlayabilirsiniz.
                      </span>
                    </div>
                  </div>
                </>
              )}
              {products.length > 0 && (
                <>
                  <h1 className="text-[1.3125rem] leading-[1.52rem] mt-[3.75rem] mb-[0.8125rem] xs:text-center md:text-start">
                    Sepetim
                  </h1>
                  <form action="" className="b-form">
                    <div className="b-f-box flex xs:flex-col md:flex-row mx-[-0.625rem]">
                      <div className="b-f-b-left xs:mx-0 md:mx-2.5 xs:w-full md:w-2/3">
                        {products?.map((product: Product, index: number) => (
                          <BasketCard key={index} product={product} />
                        ))}
                      </div>
                      <div className="b-f-b-right xs:mx-0 md:mx-2.5 xs:w-full md:w-1/3">
                        {products.length > 0 && <BasketSummary />}
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </section>
        </main>
      </RootLayout>
    </>
  );
}
