import { useFavListStore } from "@/store/favList";
import { useLanguageStore } from "@/store/languageStore";
import { useProductsStore } from "@/store/products";
import { useParams } from "next/navigation";
import React, { useState, useEffect, FormEvent, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export default function ProductDetailsTop() {
  const params = useParams();
  const id = params?.details as string;
  const { addProductToBasket } = useProductsStore();
  const { addProductToFavList } = useFavListStore();
  const { register, watch } = useForm();
  const { getEndpoint, setLanguage } = useLanguageStore();
  const endpoint = getEndpoint();

  const fetchProduct = async (id: string) => {
    const response = await fetch(endpoint + "/" + id);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  useEffect(() => {
    const savedLanguage =
      typeof window !== "undefined"
        ? (localStorage.getItem("language") as "tr" | "en")
        : null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, [setLanguage]);

  const { data: details } = useQuery(["product", id], () => fetchProduct(id), {
    enabled: !!id,
  });

  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    if (details?.color1) {
      setSelectedColor(details.color1);
    }
  }, [details]);

  const colorToImages: Record<string, string[]> = {
    [details?.color1 ?? ""]: [
      details?.productDetailsImg1,
      details?.productDetailsImg2,
    ],
    [details?.color2 ?? ""]: [
      details?.productDetailsImg3,
      details?.productDetailsImg4,
    ],
    [details?.color3 ?? ""]: [
      details?.productDetailsImg5,
      details?.productDetailsImg6,
    ],
  };

  const images = colorToImages[selectedColor] || [
    details?.productDetailsImg1,
    details?.productDetailsImg2,
  ];

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedColorValue = watch("color") || selectedColor;
    addProductToBasket({
      id: (Math.random() * 10000).toString(),
      image: images[0],
      name: details?.name,
      color: selectedColorValue,
      price: details?.price,
    });
    toast.success("Ürün sepetinize eklendi.");
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const selectedColorValue = watch("color") || selectedColor;
    addProductToFavList({
      id: (Math.random() * 10000).toString(),
      productCardImg1: images[0],
      productCardImg2: images[1],
      name: details?.name,
      color: selectedColorValue,
      point: details?.point,
      price: details?.price,
    });
    toast.success("Ürün favorilerinize eklendi.");
  };

  return (
    <section className="product-details-top pt-[3.75rem] mb-8">
      <div className="container">
        <div className="p-d-t-box flex flex-wrap mx-[-0.625rem]">
          <div className="p-d-t-b-left xs:max-w-full md:max-w-[50%] px-2.5">
            <div className="p-d-t-b-carousel xs:w-full md:w-[558px] xs:h-[322px] md:h-[491px] xs:mb-[1.875rem] md:mb-[3.75rem] relative">
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
                {images.map((image: string, index: number) => (
                  <div key={index} className="p-d-t-b-c-item">
                    <img
                      src={image}
                      alt={`Ürün Resmi ${index + 1}`}
                      className="max-h-[27.25rem]"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="p-d-t-b-right xs:max-w-full md:max-w-[50%] px-2.5">
            <div className="p-d-t-b-title flex justify-between">
              <h1 className="text-[2.625rem] mb-3.5">{details?.name}</h1>
              <button
                className="p-d-t-b-fav-button w-[4.1875rem] h-20 border-[1px] border-[#dee3ed] rounded-[0.625rem] shadow-[0_0.375rem_0.75rem_-4px_rgba(37,51,66,0.2)] py-[1.5625rem] px-4 text-[#ffcb05] hover:text-white hover:bg-[#ffcb05] cursor-pointer"
                onClick={handleClick}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-9 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="p-d-t-b-rate flex flex-row items-center mb-[1.125rem]">
              <div className="p-d-t-b-r-star flex gap-1 text-[#ffc900] opacity-70 mr-[7px]">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>
              <div className="p-d-t-b-r-point w-[31px] bg-[#ecf0f2] text-center rounded-lg text-[#5f6b76] text-xs">
                {details?.point}
              </div>
            </div>
            <form className="p-d-t-b-form" onSubmit={submitHandle}>
              <div className="p-d-property min-h-20 xs:w-full md:w-[280px] mb-[1.3125rem] border-[1px] rounded-lg shadow-[0_6px_12px_-4px_rgba(37,51,66,0.2)] hover:border-[#8e9fad] relative flex grow">
                <div className="p-d-p-title text-xs text-[#8e9fad] absolute top-3 left-4">
                  RENK
                </div>
                {details?.color2 ? (
                  <>
                    <div className="p-d-p-arrow text-[#979797] absolute top-3 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-[15px] h-[15.5px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <select
                      {...register("color")}
                      defaultValue={details?.color1}
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full outline-none border-[1px] rounded-lg px-4 appearance-none cursor-pointer"
                    >
                      <option value={details?.color1}>{details?.color1}</option>
                      {details?.color2 && (
                        <option value={details?.color2}>
                          {details?.color2}
                        </option>
                      )}
                      {details?.color3 && (
                        <option value={details?.color3}>
                          {details?.color3}
                        </option>
                      )}
                    </select>
                  </>
                ) : (
                  <p className="flex items-center px-4">{details?.color1}</p>
                )}
              </div>
              <div className="p-d-price-radio mb-5 bg-[#eff5ff] border-[1px] rounded-lg border-[#2855ac] shadow-[0_0.375rem_0.75rem_-4px_rgba(37,51,66,0.3)] p-4 relative cursor-pointer">
                <label htmlFor="" className="p-d-p-r-label cursor-pointer">
                  <span className="p-d-p-r-l-badge text-xs text-white absolute left-0 top-0 rounded-tl-lg rounded-br-[0.625rem] bg-[#2855ac] py-[3px] px-[0.4375rem]">
                    Ücretsiz Kargo
                  </span>
                  <div className="p-d-p-r-l-top flex justify-between">
                    <div className="p-d-p-r-l-t-seller mt-[0.9375rem] inline-block">
                      <span className="pl-1.5 leading-6">
                        <input
                          type="radio"
                          className="accent-[#ffc900]"
                          checked
                        />
                        <a
                          href="https://www.turkcell.com.tr/pasaj/magaza/turkcell-satis-a.s."
                          className="pl-2 text-[#2855ac]"
                        >
                          Turkcell Satış A.Ş.
                        </a>
                      </span>
                    </div>
                    <div className="p-d-p-r-l-t-price text-[#2855ac] text-[1.5rem] leading-5 relative inline-block">
                      {details?.price.toLocaleString("tr-TR")}
                      <span className="text-[0.625rem] pl-0.5 relative top-[-8px]">
                        TL
                      </span>
                    </div>
                  </div>
                  <div className="p-d-p-r-l-note text-xs leading-5 text-[#8e9fad] text-right">
                    1 İş gününde kargoda
                  </div>
                </label>
              </div>
              <button
                type="submit"
                className="p-d-add-to-basket-button flex justify-center items-center w-full h-12 bg-[#ffc900] px-6 rounded-[1.625rem] hover:bg-[#ffd917] transition duration-200 ease-in"
              >
                Sepete Ekle
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
