import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface CarouselItem {
  img: string;
  alt: string;
  href: string;
}

const items: CarouselItem[] = [
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/slsp-pasaj-hero.jpg?1722432241000",
    alt: "Galaxy Z Fold6 ve Z Flip6 Turkcell Pasaj'da satışta!",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/samsung-galaxy-z-fold-6-z-flip-6",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/ay-agustos-pasaj-hero.jpg?1722588092000",
    alt: "Ayın Yıldızları sahnede!",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/ayin-yildiz-urunu",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/thtpasaj-hero.jpg?1722510264000",
    alt: "Şimdi Turkcell'li olun, 30. yıla özel süper fırsatları kaçırmayın!",
    href: "https://www.turkcell.com.tr/tr/turkcellli-olmak/paket-secimi?packagetype=postpaid&sort=default&card_group=sinirlisureli&",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Klima-hero-banner-webx.jpg?1721886355000",
    alt: "Sıcakları bitiren fırsat rüzgarı",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/klima-ve-vantilator-urunlerinde-yaz-firsatlari",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/thd-pasaj-herow.jpg?1722440219000",
    alt: "Taksitli Harikalar Diyarı açıldı!",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/taksitli-harikalar-diyari",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Garanti-4-Taksit2-hero-banner-web.jpg?1722438721000",
    alt: "Garanti BBVA kredi kartlarına özel peşin fiyatına 4 taksit",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/pesin-fiyatina-4-taksit-firsati",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/awk-pasaj-hero.jpg?1722416558000",
    alt: "Apple Watch kordonlarda 3 al 2 öde fırsatı!",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/akilli-saat-kordonlari-pasajda",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Pasaj_fibabanka-hero-banner-webxxx.jpg?1722416968000",
    alt: "Fibabanka Alışgidiş Kredisi'yle %0 faizli alışveriş fırsatı!",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/fibabanka-alisveris-kredisi-firsatlari",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/akilli-ev-rn-05-hero-banner-web.jpg?1722437810000",
    alt: "Evinizin akıllı ihtiyaçları peşin fiyatına 4 taksit fırsatıyla!",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/evinizin-akilli-ihtiyaclari-pesin-fiyatina-4-taksit-firsatiyla",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/nsrpr-pasaj-hero.jpg?1721985549000",
    alt: "100 kapsül kahve hediyesini kaçırmayın!",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/nespressoda-hediye-kapsul-kampanyasi",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Pasajdan-Aldm-iPhone15-hero-banner-web.jpg",
    alt: "Pasaj'dan aldım çünkü...",
    href: "https://www.turkcell.com.tr/pasaj/cep-telefonu/ios-telefonlar/iphone-15-128-gb?seller=1",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/ak-logosuz-pasaj-hero.jpg",
    alt: "Alışveriş Kredisi Pasaj'da!",
    href: "https://www.turkcell.com.tr/kampanya/turkcell-pasaj-alisveris-kredisi/",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/isbnk15k-pasaj-hero.jpg?1720528533000",
    alt: "Maximum Kart'a başvur, ayda 15.000 TL'yi aşan MaxiPuan kazan!",
    href: "https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/15-000-tl-maxipuan-firsati-pasajda",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/ikincieltaksit-pasaj-hero.jpg",
    alt: "Yenilenmiş ürünlerde 12 aya varan taksit!",
    href: "https://www.turkcell.com.tr/pasaj/cep-telefonu/yenilenmis-telefonlar",
  },
  {
    img: "https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Banner/Standart/Pasaj/Pasaj_iPhone-hero-banner-web.jpg",
    alt: "Senin için en iyi iPhone hangisi mi? Cevabı Pasaj'da seni bekliyor!",
    href: "https://www.turkcell.com.tr/kampanya/sana-uygun-iphone/",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
};

const HeroSection: React.FC = () => (
  <section className="hero-section xs:pt-5 md:pt-10 xs:pb-6 md:pb-12 xs:h-[220.5px] md:h-[588px]">
    <div className="container">
      <div className="h-s-boxes pb-8 relative">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderDotsOutside
          responsive={responsive}
          showDots
          swipeable
        >
          {items.map((item, index) => (
            <div key={index} className="h-s-box relative">
              <img src={item.img} alt={item.alt} />
              <div className="h-s-button absolute xs:bottom-[1.40625rem] xs:left-[1.85rem] md:bottom-[7.5rem] md:left-[6.25rem]">
                <a
                  href={item.href}
                  className="rounded-lg bg-[#ffc900] text-[#2855ac] xs:py-1 xs:px-4 md:py-4 md:px-16 hover:bg-[#eeb116] transition duration-300 ease-in"
                >
                  İncele
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </section>
);

export default HeroSection;
