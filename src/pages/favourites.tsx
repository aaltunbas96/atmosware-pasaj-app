import { useSession } from "next-auth/react";
import ProductCard from "@/components/home/ProductCard";
import RootLayout from "@/components/layout/RootLayout";
import { useFavListStore } from "@/store/favListStore";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

export interface Product {
  id: string;
  productCardImg1: string;
  productCardImg2: string;
  name: string;
  color: string;
  point: number;
  price: number;
}

export default function Favourites() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { favProducts, clearFavList } = useFavListStore();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) router.push("/login");
  }, [session, status]);

  if (status === "loading") {
    return <p className="text-center">Yükleniyor...</p>;
  }

  return (
    <RootLayout>
      <main>
        <section className="favourites mb-20">
          <div className="container">
            {favProducts.length === 0 && (
              <div className="f-info-card xs:px-[3.25rem] md:px-[6.5rem]">
                <div className="flex flex-col items-center mb-[1.875rem] min-h-44 pt-[4.375rem] px-5 pb-5 bg-[#009ed8] rounded-[0.625rem] text-white mt-[3.75rem]">
                  <h3 className="text-[1.625rem] leading-8 mb-[0.9375rem]">
                    Favorilerinizde ürün bulunmamaktadır.
                  </h3>
                  <span>
                    Turkcell'in avantajlı dünyasından faydalanmak için hemen
                    alışverişe başlayabilirsiniz.
                  </span>
                </div>
              </div>
            )}
            {favProducts.length > 0 && (
              <>
                <div className="flex justify-between items-center text-[1.3125rem] leading-[1.52rem] mt-[3.75rem] mb-[0.8125rem]">
                  <h1>Favorilerim</h1>
                  <button
                    className="s-o-b-button flex justify-center items-center h-10 bg-[#ffc900] px-6 rounded-[2.5rem] hover:bg-[#ffd917] transition duration-200 ease-in"
                    onClick={() => clearFavList()}
                  >
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
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
                <form action="" className="f-form">
                  <div className="f-f-box flex flex-wrap xs:justify-center md:justify-start gap-5">
                    {favProducts?.map((product: Product, index: number) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </div>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
    </RootLayout>
  );
}
