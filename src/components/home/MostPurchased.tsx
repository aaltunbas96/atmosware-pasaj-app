import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard, { Product } from "./ProductCard";
import { useQuery } from "react-query";
import { useLanguageStore } from "@/store/languageStore";
import useCms from "@/hooks/useCms";
import useGetLanguage from "@/hooks/useGetLanguage";

const fetchProducts = async (endpoint: string, category?: string | null) => {
  const url = category
    ? `${endpoint}?category=${encodeURIComponent(category)}`
    : endpoint;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function MostPurchased() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { getEndpoint } = useLanguageStore();
  const endpoint = getEndpoint();
  const cms = useCms();

  const { data: products } = useQuery(
    ["products", selectedCategory],
    () => fetchProducts(endpoint, selectedCategory),
    {
      enabled: true,
      keepPreviousData: true,
    }
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="most-purchased xs:py-[25px] md:py-[50px]">
      <div className="container">
        <h2 className="text-[34px] leading-5 mb-9 xs:text-center md:text-start">
          {cms?.pc4}
        </h2>
        <div>
          <div className="m-p-categories mb-[30px] border-b-[1.5px]">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 7,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("Cep Telefonu-Aksesuar")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/ceptelefonuaksesuar.png?1722486136000"
                  alt="Cep Telefonu-Aksesuar Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-1 px-2">{cms?.cat1}</span>
              </div>
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("Bilgisayar-Tablet")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/bilgisayartablet.png?1722486136000"
                  alt="Bilgisayar-Tablet Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-4">{cms?.cat2}</span>
              </div>
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("Elektrikli Ev Aletleri")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/elektriklievaletleri.png?1722486136000"
                  alt="Elektrikli Ev Aletleri Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-4">{cms?.cat3}</span>
              </div>
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("Sağlık-Kişisel Bakım")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/saglikkisiselbakim.png?1722486136000"
                  alt="Sağlık-Kişisel Bakım Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-4">{cms?.cat5}</span>
              </div>
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("Beyaz Eşya")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/beyaz-esya.png?1722486136000"
                  alt="Beyaz Eşya Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-4">{cms?.cat4}</span>
              </div>
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("Hobi-Oyun")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/hobioyun.png?1722486136000"
                  alt="Hobi-Oyun Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-4">{cms?.cat6}</span>
              </div>
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("TV-Ses Sistemleri")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/tvsessistemleri.png?1722486136000"
                  alt="TV-Ses Sistemleri Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-4">{cms?.cat7}</span>
              </div>
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("Ev-Yaşam")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/evyasam.png?1722486136000"
                  alt="Ev-Yaşam Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-4">{cms?.cat8}</span>
              </div>
              <div
                className="m-p-c-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in"
                onClick={() => handleCategoryClick("Anne-Bebek-Oyuncak")}
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kategori/annebebekcocuk.png?1722486136000"
                  alt="Anne-Bebek-Oyuncak Logo"
                  className="mb-2.5 h-[30px]"
                />
                <span className="text-center py-4">{cms?.cat9}</span>
              </div>
            </Carousel>
          </div>
          <div className="m-p-c-content flex flex-wrap gap-4 justify-center md:justify-between">
            {products?.map((product: Product, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
