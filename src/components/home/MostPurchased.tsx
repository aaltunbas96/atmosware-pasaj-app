import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard, { Product } from "./ProductCard";
import { useQuery } from "react-query";

const fetchProducts = async (category?: string | null) => {
  const url = category
    ? `http://localhost:3001/products?category=${encodeURIComponent(category)}`
    : `http://localhost:3001/products`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function MostPurchased() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: products } = useQuery(
    ["products", selectedCategory],
    () => fetchProducts(selectedCategory),
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
          Çok Satanlar
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
                <span className="text-center py-1 px-2">
                  Cep Telefonu-Aksesuar
                </span>
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
                <span className="text-center py-4">Bilgisayar-Tablet</span>
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
                <span className="text-center py-4">Elektrikli Ev Aletleri</span>
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
                <span className="text-center py-4">Sağlık-Kişisel Bakım</span>
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
                <span className="text-center py-4">Beyaz Eşya</span>
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
                <span className="text-center py-4">Hobi-Oyun</span>
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
                <span className="text-center py-4">TV-Ses Sistemleri</span>
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
                <span className="text-center py-4">Ev-Yaşam</span>
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
                <span className="text-center py-4">Anne-Bebek-Oyuncak</span>
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