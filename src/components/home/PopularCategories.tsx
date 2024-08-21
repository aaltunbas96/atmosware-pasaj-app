import React from "react";

export default function PopularCategories() {
  return (
    <section className="popular-categories py-[50px]">
      <div className="container">
        <h1 className="text-[34px] leading-5 mb-9 xs:text-center md:text-start">
          Popüler Kategoriler
        </h1>
        <div className="p-c-box flex flex-wrap justify-center gap-4 md:justify-between">
          <a href="/" className="flex flex-col items-center w-[82px]">
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/hediye-ceki-icon.jpeg?1722486136000"
                alt="Hediye Çeklerim"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Hediye Çeklerim</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/en-favori-urunler"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/fav.jpg?1722486136000"
                alt="En Çok Favorilenenler"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">En Çok Favorilenenler</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/kampanya/turkcell-firsatlar-kapisi/"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/firsat-kapisi2-164x164.png?1722486136000"
                alt="Fırsatlar Kapısı"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Fırsatlar Kapısı</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/cok-satan-urunler"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/coksatan2.png?1722486136000"
                alt="Çok Satanlar"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Çok Satanlar</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/pasaj/cep-telefonu/cep-telefonu-aksesuarlari/kulakliklar"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/kulaklim2.png?1722486136000"
                alt="Kulaklıklar"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Kulaklıklar</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/pasaj/cep-telefonu/ios-telefonlar"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/iostelefon2.png?1722486136000"
                alt="Apple Telefonlar"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Apple Telefonlar</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/pasaj/cep-telefonu/cep-telefonu-aksesuarlari/sarj-cihazlari/tasinabilir-sarj-cihazlari-powerbank"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/powerbank3.png?1722486136000"
                alt="Powerbank"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Powerbank</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/pasaj/elektrikli-ev-aletleri/elektrikli-mutfak-aletleri/kahve-makinesi"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/kahvemakinasi2.png?1722486136000"
                alt="Kahve Makineleri"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Kahve Makineleri</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/pasaj/bilgisayar-tablet/tabletler/apple-tabletler"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/tablet7.png?1722486136000"
                alt="Apple Tabletler"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Apple Tabletler</span>
          </a>
          <a
            href="https://www.turkcell.com.tr/pasaj/bilgisayar-tablet/bilgisayarlar"
            className="flex flex-col items-center w-[82px]"
          >
            <div className="h-[82px] rounded-full mb-[15px] shadow-[0_2px_5px_0px_rgba(0,0,0,0.25)] hover:border-4 border-[#ffc900] hover:transition duration-150 ease-in">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net//SiteAssets/Cihaz/pasaj/story/bilgisayar7.png?1722486136000"
                alt="Bilgisayarlar"
                className="rounded-full"
              />
            </div>
            <span className="text-center mb-2.5">Bilgisayarlar</span>
          </a>
        </div>
      </div>
    </section>
  );
}
