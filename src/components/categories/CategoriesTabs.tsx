import { useSearchProductsListStore } from "@/store/searchProductsList";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { useQuery } from "react-query";
import Carousel from "react-multi-carousel";
import { useLanguageStore } from "@/store/languageStore";
import useGetLanguage from "@/hooks/useGetLanguage";

async function fetchProductsByCategory(
  category: string | null,
  endpoint: string
) {
  const url = category
    ? `${endpoint}?category=${encodeURIComponent(category)}`
    : endpoint;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

const categoryItemClass =
  "c-t-item flex flex-col items-center cursor-pointer hover:border-b-[3px] border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in w-[165px] mr-2 text-lg leading-[1.33rem] text-[#8e9fad]";

export default function CategoriesTabs() {
  const { productsFromSearch, setProductsFromSearch } =
    useSearchProductsListStore();
  const { getEndpoint } = useLanguageStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const endpoint = getEndpoint();
  useGetLanguage();

  const { refetch } = useQuery(
    ["products", selectedCategory],
    () => fetchProductsByCategory(selectedCategory, endpoint),
    {
      enabled: false,
      onSuccess: (data) => {
        setProductsFromSearch(data);
      },
    }
  );

  useEffect(() => {
    if (selectedCategory !== null) {
      refetch();
    }
  }, [selectedCategory, refetch]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === "Tümü") {
      setSelectedCategory("");
    }
  };

  const categories = [
    { name: "Tümü", count: productsFromSearch.length, value: "Tümü" },
    { name: "Cep Telefonu-Aksesuar", value: "Cep Telefonu-Aksesuar" },
    { name: "Bilgisayar-Tablet", value: "Bilgisayar-Tablet" },
    { name: "Elektrikli Ev Aletleri", value: "Elektrikli Ev Aletleri" },
    { name: "Sağlık-Kişisel Bakım", value: "Sağlık-Kişisel Bakım" },
    { name: "Beyaz Eşya", value: "Beyaz Eşya" },
    { name: "Hobi-Oyun", value: "Hobi-Oyun" },
    { name: "TV-Ses Sistemleri", value: "TV-Ses Sistemleri" },
    { name: "Ev-Yaşam", value: "Ev-Yaşam" },
    { name: "Anne-Bebek-Oyuncak", value: "Anne-Bebek-Oyuncak" },
  ];

  return (
    <div className="c-tabs border-b-[1px] mb-[3.75rem] px-[4.6875rem] py-5">
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
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
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
        {categories.map((category, index) => (
          <div
            key={index}
            className={categoryItemClass}
            onClick={() => {
              handleCategoryClick(category.value);
              if (category.value === "Tümü") {
                setSelectedCategory("");
              }
            }}
          >
            <span
              className={`text-center ${
                category.value === "Cep Telefonu-Aksesuar"
                  ? "py-[5.5px] px-2"
                  : "py-4"
              }`}
            >
              {category.name}
              {category.count && ` (${category.count})`}
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
