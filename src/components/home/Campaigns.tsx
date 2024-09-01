import useCms from "@/hooks/useCms";
import useGetLanguage from "@/hooks/useGetLanguage";
import React from "react";

export default function Campaigns() {
  const cms = useCms();
  useGetLanguage();

  return (
    <section className="campaigns py-[50px]">
      <div className="container">
        <h2 className="text-[34px] leading-5 mb-9 xs:text-center md:text-start">
          {cms?.htCam}
        </h2>
        <div className="campaigns-box flex xs:flex-col md:flex-row justify-start">
          <div className="c-b-left mx-2.5">
            <a href="https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/1000-tlye-varan-taksitlerle-alabilecegin-urunler-burada">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/36aytaksit-kampanyalar-yatay-webx.jpg?1722486136000"
                alt="Turkcell'li Olmak Kazandırır"
                className="w-[48.75rem] mb-5 rounded-[10px]"
              />
            </a>
            <a href="https://www.turkcell.com.tr/pasaj/cep-telefonu/cep-telefonu-aksesuarlari/kulakliklar/kulak-ustu-kulakliklar">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/yatay/pac-jbl--yatay-web.jpg?1722486136000"
                alt="Pasaj'dan Aldım Çünkü Serisi"
                className="w-[48.75rem] mb-5 rounded-[10px]"
              />
            </a>
          </div>
          <div className="c-b-right mx-2.5">
            <a href="https://www.turkcell.com.tr/kampanyalar/pasaj/cihazlar/pasaj-hangikredi-nakit-firsatlari">
              <img
                src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Cihaz/pasaj/kampanya/dikey/hk30k-Kampanyalar-Dikey.jpg?1722486136000"
                alt="HangiKredi"
                className="md:w-[23.75rem] mb-5 rounded-[10px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
