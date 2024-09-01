import useCms from "@/hooks/useCms";
import useGetLanguage from "@/hooks/useGetLanguage";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Opportunities() {
  const cms = useCms();
  useGetLanguage();

  return (
    <section className="opportunities py-[50px]">
      <div className="container">
        <h2 className="text-[34px] xs:leading-10 md:leading-5 mb-9 xs:text-center md:text-start">
          {cms?.oTitle}
        </h2>
        <div className="o-boxes">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass="flex items-center"
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
            <div className="o-box w-[280px]">
              <a
                href="https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/faizsiz-taksitli-nakit-avans-pasajda"
                className="p-5"
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/r4-riscep-KF.jpg"
                  alt="İşCep"
                  className="rounded-lg"
                />
              </a>
            </div>
            <div className="o-box w-[280px]">
              <a
                href="https://www.turkcell.com.tr/pasaj/cep-telefonu/cep-telefonu-aksesuarlari/airpods/apple-airpods-max"
                className="p-5"
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/pacunku-kfa.jpeg"
                  alt="Pasaj'dan Aldım Çünkü Serisi"
                  className="rounded-lg"
                />
              </a>
            </div>
            <div className="o-box w-[280px]">
              <a
                href="https://www.turkcell.com.tr/pasaj/ev-yasam/spor-ve-outdoor-urunleri/fitness-urunleri/kosu-bantlari/voit-alpha-katlanabilir-kosu-bandi"
                className="p-5"
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/r1-spor-voit-KF.jpg"
                  alt="Spor & Outdoor Banner Temmuz"
                  className="rounded-lg"
                />
              </a>
            </div>
            <div className="o-box w-[280px]">
              <a
                href="https://www.turkcell.com.tr/pasaj/tv-ses-sistemleri/ses-sistemleri/hoparlorler/bluetooth-hoparlorler/jbl-go-4-tasinabilir-bluetooth-hoparlor"
                className="p-5"
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/go4-KF.jpg"
                  alt="Jbl go4"
                  className="rounded-lg"
                />
              </a>
            </div>
            <div className="o-box w-[280px]">
              <a
                href="https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/ilk-kez-cardfinansli-olanlara-ozel-0-faizli-aninda-kredi-banner"
                className="p-5"
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/cfgo1305-KF.jpg"
                  alt="cfgo 20 bin faiz"
                  className="rounded-lg"
                />
              </a>
            </div>
            <div className="o-box w-[280px]">
              <a
                href="https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/herschel-pasajda-ustelik-36-aya-varan-taksit-imkaniyla"
                className="p-5"
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/Herschel-kacirilmayacak-firsatlar.jpg"
                  alt="Herschel Çantalar"
                  className="rounded-lg"
                />
              </a>
            </div>
            <div className="o-box w-[280px]">
              <a
                href="https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/tv-plus-pro-alisverislerinde-12-aylik-tv-plus-premium-hediye"
                className="p-5"
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/r1-tvpluspro-KF.jpg"
                  alt="TV+ PRO Bireysel Kanal Satış Lansman"
                  className="rounded-lg"
                />
              </a>
            </div>
            <div className="o-box w-[280px]">
              <a
                href="https://www.turkcell.com.tr/pasaj/ev-yasam/spor-ve-outdoor-urunleri/outdoor-urunleri-thermos"
                className="p-5"
              >
                <img
                  src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/firsat/web/thermos-KF.jpg"
                  alt="Thermos"
                  className="rounded-lg"
                />
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
