import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HeartIcon } from "../icons/HeartIcon";
import { useFavListStore } from "@/store/favList";
import { toast } from "react-toastify";

export interface Product {
  id: string;
  productCardImg1: string;
  productCardImg2: string;
  name: string;
  color: string;
  point: number;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, productCardImg1, productCardImg2, name, point, price } = product;
  const { favProducts, removeProductFromFavList, addProductToFavList } =
    useFavListStore();
  const isFavorite = favProducts.some((favProduct) => favProduct.id === id);

  const onClick = () => {
    if (isFavorite) {
      removeProductFromFavList(product.id);
      toast.success("Ürün favorilerinizden çıkarıldı.");
    } else {
      addProductToFavList(product);
      toast.success("Ürün favorilerinize eklendi.");
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div className="product-card w-[17.5rem] h-[28.375rem] border-[1px] border-inherit rounded-[0.625rem] shadow-[0_2px_0.375rem_0px_rgba(37,51,66,.09)] py-11 px-4 hover:border-2 hover:border-[#ffcb05] hover:transition duration-100 relative">
      <button
        className="p-c-fav-button absolute top-4 right-[19px]"
        onClick={handleClick}
      >
        <span className="cursor-pointer">
          <HeartIcon color={isFavorite ? "#ffcb05" : "#fff"} />
        </span>
      </button>
      <Link href={`http://localhost:3000/products/${id}`}>
        <div className="p-c-body border-b-[1px]">
          <div className="p-c-b-carousel h-[13.3125rem] mb-3 relative">
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
              renderDotsOutside
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 1,
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
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className="p-c-b-c-item">
                <img src={productCardImg1} alt="Ürün Resmi" />
              </div>
              <div className="p-c-b-c-item">
                <img src={productCardImg2} alt="Ürün Resmi" />
              </div>
            </Carousel>
          </div>
          <span className="text-lg leading-5 inline-block h-11 mb-2">
            {name}
          </span>
          <div className="rate flex flex-row items-center">
            <div className="r-star flex gap-0.5 text-[#ffc900] opacity-70 mr-[7px] text-xs">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>
            <div className="r-point text-[#5f6b76] text-[0.625rem] bg-transparent">
              {point}
            </div>
          </div>
          <div className="badges mt-2 mb-3 flex">
            <div className="b-item bg-[#E5F8FF] text-[0.5625rem] leading[1.11rem] text-center text-[#5f6b76] py-1 px-1.5 mr-1 rounded">
              Alışveriş
              <br />
              Kredisi
            </div>
            <div className="b-item bg-[#FDF7E7] text-[0.5625rem] leading[1.11rem] text-center text-[#5f6b76] py-1 px-1.5 mr-1 rounded">
              Ücretsiz
              <br />
              Kargo
            </div>
          </div>
        </div>
        <div className="p-c-foot flex items-center py-4">
          <div className="price text-[#2855ac] text-[1.125rem] relative">
            {price.toLocaleString("tr-TR")}
            <span className="text-[0.6875rem] relative top-[-0.325rem] ml-1">
              TL
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
