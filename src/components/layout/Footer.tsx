import useCms from "@/hooks/useCms";
import useGetLanguage from "@/hooks/useGetLanguage";
import { useLanguageStore } from "@/store/languageStore";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Footer() {
  const { language, setLanguage } = useLanguageStore((state) => ({
    language: state.language,
    setLanguage: state.setLanguage,
  }));
  const cms = useCms();

  const handleLanguageChange = (lang: "tr" | "en") => {
    setLanguage(lang);
  };

  const languageClass = (lang: "tr" | "en") =>
    language === lang
      ? "underline underline-offset-4"
      : "opacity-50 hover:opacity-100 hover:underline underline-offset-4 hover:transition duration-300";

  return (
    <footer className="bg-[#27356f]">
      <div className="footer-top xs:pt-5 md:pt-10">
        <div className="container">
          <nav className="footer-top-nav">
            <div className="f-t-outer-box flex xs:flex-col md:flex-row justify-center flex-wrap">
              <div className="f-t-box px-2.5 xs:pb-6 md:pb-0 xs:text-center md:text-start">
                <h3 className="mb-5">
                  <a href="/">{cms?.fBox1Title}</a>
                </h3>
                <ul>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox1}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox12}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox13}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox14}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox15}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox16}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox17}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox18}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox19}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox110}</a>
                  </li>
                </ul>
              </div>
              <div className="f-t-box px-2.5 xs:pb-6 md:pb-0 xs:text-center md:text-start">
                <h3 className="mb-5">
                  <a href="/">{cms?.pcTitle}</a>
                </h3>
                <ul>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox2}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox22}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox23}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox24}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox25}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox26}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox27}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox28}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox29}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox210}</a>
                  </li>
                </ul>
              </div>
              <div className="f-t-box px-2.5 xs:pb-6 md:pb-0 xs:text-center md:text-start">
                <h3 className="mb-5">
                  <a href="/">{cms?.fBox3Title}</a>
                </h3>
                <ul>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox3}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox32}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox33}</a>
                  </li>
                </ul>
              </div>
              <div className="f-t-box px-2.5 xs:pb-6 md:pb-0 xs:text-center md:text-start">
                <h3 className="mb-5">
                  <a href="/">{cms?.htHelp}</a>
                </h3>
                <ul>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox4}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox42}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.htOrder}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox44}</a>
                  </li>
                </ul>
              </div>
              <div className="f-t-box px-2.5 xs:pb-6 md:pb-0 xs:text-center md:text-start">
                <h3 className="mb-5">
                  <a href="/">{cms?.fBox5Title}</a>
                </h3>
                <ul>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox5}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox52}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox53}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox110}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox55}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox56}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox57}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox58}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox59}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox510}</a>
                  </li>
                </ul>
              </div>
              <div className="f-t-box px-2.5 xs:pb-0 md:pb-0 xs:text-center md:text-start">
                <h3 className="mb-5">
                  <a href="/">{cms?.fBox6Title}</a>
                </h3>
                <ul>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox6}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox62}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox63}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox64}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox65}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox66}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox67}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox68}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox69}</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">{cms?.fBox610}</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr className="border-b-2 opacity-10" />
        </div>
      </div>
      <div className="footer-mid">
        <div className="container">
          <div className="f-m-outer-box flex flex-wrap xs:flex-col md:flex-row justify-between items-center">
            <div className="f-m-box-language xs:pb-4 md:pb-0">
              <ul className="text-white flex items-center gap-6">
                <li>
                  <a
                    href=""
                    className={languageClass("tr")}
                    onClick={() => {
                      handleLanguageChange("tr");
                    }}
                  >
                    {cms?.fLangTr}
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={languageClass("en")}
                    onClick={() => {
                      handleLanguageChange("en");
                    }}
                  >
                    {cms?.fLangEn}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="opacity-50 hover:opacity-100 hover:underline underline-offset-4 hover:transition duration-300"
                  >
                    {cms?.fLangAr}
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="opacity-50 hover:opacity-100 hover:underline underline-offset-4 hover:transition duration-300"
                  >
                    {cms?.fLangRu}
                  </a>
                </li>
              </ul>
            </div>
            <div className="f-m-box-social text-white flex items-center gap-12">
              <strong>{cms?.fBoxFollow}</strong>
              <div className="flex items-center gap-2">
                <a href="https://x.com/Turkcell" target="_blank">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com/Turkcell" target="_blank">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/turkcell/" target="_blank">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.youtube.com/Turkcell" target="_blank">
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/turkcell/?originalSubdomain=tr"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="f-b-partners">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass="flex justify-center items-center"
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
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://fizy.com/" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/fizy-logo.png?1721868490000"
                    alt="Fizy Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://www.superonline.net/" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/sol-yeni-logo.png?1721868490000"
                    alt="Turkcell Superonline Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://www.turkcell.com.tr/platinum" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/platinum-logo.png?1721868490000"
                    alt="Platinum Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://bip.com/tr/" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/bip-logo.png?1721868490000"
                    alt="BiP Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a
                  href="https://www.turkcell.com.tr/servisler/tvplus"
                  target="_blank"
                >
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/tv-plus-logo-yeni.png?1721868490000"
                    alt="TV+ Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://mylifebox.com/tr/index.html" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/LifeBox-Logo.png?1721868490000"
                    alt="Lifebox Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://paycell.com.tr/" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/paycell_logo2.png?1721868490000"
                    alt="Paycell Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://www.turkcell.com.tr/gnc" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/gnc-logo.png?1721868490000"
                    alt="Gnctrkcll Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://gameplus.com.tr/" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/logo_gaming.png?1721868490000"
                    alt="Game+ Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://istesuit.com/" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/suit-logo2.png?1721868490000"
                    alt="İşte Suit Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://globalbilgi.com.tr/" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Global-Bilgi-Logo.png?1721868490000"
                    alt="Turkcell Global Bilgi Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a
                  href="https://wiyo.com.tr/?utm_source=turkcell-web&utm_medium=footer-slider"
                  target="_blank"
                >
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/wiyo-v2.png?1721868490000"
                    alt="Wiyo Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a
                  href="https://gelecegiyazanlar.turkcell.com.tr/"
                  target="_blank"
                >
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Gelecegi-YazanKadinlar-Logo.png?1721868490000"
                    alt="Turkcell Geleceği Yazanlar Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
              <div className="partner opacity-50 hover:opacity-100 hover:ease-in">
                <a href="https://turkcellbulut.com/" target="_blank">
                  <img
                    src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Bulut.png?1721868490000"
                    alt="Turkcell Akıllı Bulut Logo"
                    className="max-h-[2.375rem]"
                  />
                </a>
              </div>
            </Carousel>
          </div>
        </div>
        <hr className="border-b-2 opacity-10" />
        <div className="container">
          <div className="f-b-outer-box flex xs:flex-col md:flex-row justify-between items-center">
            <div className="f-b-box-left xs:pb-4 md:pb-0">
              <ul className="text-white flex items-center gap-6">
                <li>
                  <a href="/" className="opacity-50 hover:opacity-100">
                    {cms?.fBox15}
                  </a>
                </li>
                <li>
                  <a href="/" className="opacity-50 hover:opacity-100">
                    {cms?.fb2}
                  </a>
                </li>
              </ul>
            </div>
            <div className="f-b-box-right">
              <span className="flex items-center gap-6">
                <div className="trust-sign">
                  <a
                    href="https://www.guvendamgasi.org.tr/view/uye/detay.php?Guid=3d5587d4-8538-11ed-8e33-48df373f4850"
                    target="_blank"
                  >
                    <img
                      src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/assetsv2/common/images/icons/guven-damgasi-icon.png?1721868490000"
                      alt="Trust Logo"
                      className="w-10"
                    />
                  </a>
                </div>
                <div className="etbis">
                  <a
                    href="https://www.eticaret.gov.tr/siteprofil/1764651406148822/wwwpasajcom"
                    target="_blank"
                  >
                    <img
                      src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Genel/ana-sayfa/etbis-qr-code.png?1721868490000"
                      alt="ETBIS Logo"
                      className="w-8"
                    />
                  </a>
                </div>
                <p className="text-white opacity-50">
                  {cms?.fbYear}
                  <br />
                  {cms?.fbBrand}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
