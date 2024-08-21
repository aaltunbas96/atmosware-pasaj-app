import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const carouselItems = [
  "Ürün Açıklamaları",
  "Ürün Özellikleri",
  "Değerlendirmeler",
  "Ürün Soru&Cevapları",
  "Kredi Kartı Taksit Seçenekleri",
  "Alışveriş Kredisi",
  "Banka Kampanyaları",
  "İptal/İade Koşulları",
];

const CarouselItem = ({ text }: { text: string }) => (
  <div className="p-d-b-s-item flex flex-col items-center cursor-pointer hover:border-b-2 border-[#2855ac] hover:text-[#2855ac] hover:transition duration-100 ease-in mr-4">
    <h3 className="text-center p-2.5">{text}</h3>
  </div>
);

export default function ProductDetailsBottom() {
  return (
    <section className="product-details-bottom mb-20">
      <div className="container">
        <div className="p-d-b-slider mb-2.5 border-t-[0.5px] border-b-2">
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
                items: 4,
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
            {carouselItems.map((item) => (
              <CarouselItem key={item} text={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
