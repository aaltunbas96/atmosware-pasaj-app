import { useProductsStore } from "@/store/productsStore";
import React, { useEffect, useState } from "react";
import SearchArea from "./SearchArea";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import "react-dropdown/style.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import useWindowSize from "@/hooks/useWindowSize";
import ReactDropdown from "react-dropdown";
import { useQuery } from "react-query";
import { useSearchProductsListStore } from "@/store/searchProductsListStore";
import { useLanguageStore } from "@/store/languageStore";
import useGetLanguage from "@/hooks/useGetLanguage";
import useCms from "@/hooks/useCms";

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

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { setProductsFromSearch } = useSearchProductsListStore();
  const { getEndpoint } = useLanguageStore();
  const endpoint = getEndpoint();
  const cms = useCms();

  const options = [
    { value: "one", label: cms?.htFav },
    { value: "two", label: cms?.loginOrder },
    { value: "three", label: cms?.loginAccount },
    { value: "four", label: cms?.logoutPlaceholder },
  ];

  const headerBottomContent = [
    {
      name: cms?.cat1,
    },
    {
      name: cms?.cat2,
    },
    {
      name: cms?.cat3,
    },
    {
      name: cms?.cat4,
    },
    {
      name: cms?.cat5,
    },
    {
      name: cms?.cat6,
    },
    {
      name: cms?.cat7,
    },
    {
      name: cms?.cat8,
    },
    {
      name: cms?.cat9,
    },
  ];

  useQuery(
    ["products", selectedCategory],
    () => fetchProducts(endpoint, selectedCategory),
    {
      enabled: !!selectedCategory,
      keepPreviousData: true,
      onSuccess: (data) => {
        setProductsFromSearch(data);
      },
    }
  );

  const isSmallScreen = useWindowSize();

  const [isDisabled, setIsDisabled] = useState(true);
  const { products } = useProductsStore();
  const productsCounter = products.length;
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
  }, [session, status]);

  if (status === "loading" || !cms) {
    return <p className="text-center">{cms?.loading}</p>;
  }

  const onFocus = () => {
    if (session) {
      setIsDisabled(false);
    } else {
      router.push("/login");
    }
  };

  const handleChange = (selectedOption: { value: string; label: string }) => {
    if (selectedOption.value === options[0].value) {
      router.push("/favourites");
    } else if (selectedOption.value === options[3].value) {
      signOut();
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setTimeout(() => {
      router.push("/categories");
    }, 750);
  };

  return (
    <header>
      <div className="container">
        <div className="header-top flex justify-between">
          <a
            href="https://www.turkcell.com.tr/"
            className="turkcell-go flex gap-1"
          >
            <img
              src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/AMBLEM_SIYAH.jpg"
              alt="Turkcell Logo"
            />
            turkcell.com.tr
          </a>
          {!isSmallScreen && (
            <div className="header-top-menu flex gap-6">
              <a href="https://atmosware-pasaj-app.vercel.app/favourites">
                {cms?.htFav}
              </a>
              <a href="/">{cms?.htCam}</a>
              <a href="/">{cms?.htHelp}</a>
              <a href="/">{cms?.htWhy}</a>
              <a href="/">{cms?.htBlog}</a>
              <a href="/">{cms?.htOrder}</a>
            </div>
          )}
        </div>
        <div className="header-mid flex justify-between flex-wrap mb-[10px]">
          <div className="header-logo xs:max-w-[90px] xs:py-2 md:max-w-[120px]">
            <a href="/">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/passage-assets/common/images/content/pasaj-logo-new.png?1721868490000"
                alt="Pasaj Logo"
              />
            </a>
          </div>
          <SearchArea />
          <div className="flex xs:gap-[4rem] md:gap-6 xs:pt-4 md:pt-0">
            {/* @ts-ignore */}
            <ReactDropdown
              options={options}
              onChange={handleChange}
              placeholder={
                <span className="flex gap-1 items-center">
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  {session ? session.user?.name : cms?.loginPlaceholder}
                </span>
              }
              className="my-account md:w-[178px] md:h-[60px]"
              controlClassName="my-account-button flex justify-between items-center w-full xs:h-[45px] md:h-[60px]"
              placeholderClassName="cursor-pointer"
              menuClassName="flex flex-col items-center rounded-[5px]"
              arrowClosed={
                <span className="arrow-closed cursor-pointer">
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
              }
              arrowOpen={
                <span className="arrow-open cursor-pointer">
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
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              }
              disabled={isDisabled}
              onFocus={onFocus}
            />
            <a
              href="https://atmosware-pasaj-app.vercel.app/basket"
              className="my-basket flex justify-center gap-4 items-center relative xs:max-w-[135px] xs:max-h-[45px] xs:px-[19.5px] md:max-w-[180px] md:max-h-[60px] md:px-[26px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="xs:size-4 md:size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {cms?.basketPlaceholder}
              <span className="flex justify-center items-center text-white xs:w-[28.5px] xs:h-[28.5px] md:w-[38px] md:h-[38px] bg-[#ed6060] border-[3px] border-[#fafbfd] rounded-[50%] absolute xs:right-[-14px] md:right-[-19px]">
                {productsCounter}
              </span>
            </a>
          </div>
        </div>
        {isSmallScreen ? (
          <Carousel
            className="header-bottom flex justify-between items-center h-[54px]"
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
                items: 6,
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
            {headerBottomContent.map((category) => (
              <a
                href="/"
                className={`h-b-menu-item text-center hover:text-[#ffc900] hover:border-b-2 border-[#ffc900] md:py-[10px] md:px-[20px] ${
                  category.name !== "Cep Telefonu-Aksesuar" &&
                  "border-l-[1px] border-l-[#ecf0f2]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category.name);
                }}
                key={category.name}
              >
                {category.name}
              </a>
            ))}
          </Carousel>
        ) : (
          <div className="header-bottom flex justify-between items-center md:h-[54px]">
            {headerBottomContent.map((category) => (
              <a
                href="/"
                className={`h-b-menu-item text-center hover:text-[#ffc900] hover:border-b-2 border-[#ffc900] md:py-[10px] md:px-[20px] ${
                  category.name !== "Cep Telefonu-Aksesuar" &&
                  "border-l-[1px] border-l-[#ecf0f2]"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category.name);
                }}
                key={category.name}
              >
                {category.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
