import React from "react";

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <h2 className="text-center mb-5 text-[34px] leading-5">Neden Pasaj?</h2>
        <div className="why-us-top text-center pb-[30px]">
          <p className="mb-5 leading-[1.6rem]">
            Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
            saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
            Turkcell
            <br />
            Pasaj ayrıcalığıyla keşfedin.
          </p>
        </div>
        <div className="why-us-bottom flex flex-wrap justify-between items-center">
          <div className="w-u-box xs:w-full md:w-[20.625rem] flex flex-col items-center">
            <div className="w-u-icon flex justify-center items-center mb-[1.5625rem] w-[100px] h-[100px] rounded-full">
              <i className="bi bi-truck text-white text-5xl"></i>
            </div>
            <div>
              <h3 className="text-[1.625rem] leading-5 mb-3 text-center">
                Hızlı ve Kolay Teslimat
              </h3>
              <p className="text-center">
                Siparişiniz isterseniz gün içinde gelsin,
                <br />
                isterseniz bir tıkla gelin ve mağazadan
                <br />
                teslim alın.
              </p>
            </div>
          </div>
          <div className="w-u-box xs:w-full md:w-[20.625rem] flex flex-col items-center xs:pt-4 md:pt-0">
            <div className="w-u-icon flex justify-center items-center mb-[1.5625rem] w-[100px] h-[100px] rounded-full">
              <i className="bi bi-credit-card-fill text-white text-5xl"></i>
            </div>
            <div>
              <h3 className="text-[1.625rem] leading-5 mb-3 text-center">
                Esnek Ödeme Seçenekleri
              </h3>
              <p className="text-center">
                Alışverişlerinizi ister kredi kartınıza
                <br />
                taksitlendirin ister Turkcell faturanıza ek, 36
                <br />
                aya varan vade imkanından faydalanın.
              </p>
            </div>
          </div>
          <div className="w-u-box xs:w-full md:w-[20.625rem] flex flex-col items-center xs:pt-4 md:pt-0">
            <div className="w-u-icon flex justify-center items-center mb-[1.5625rem] w-[100px] h-[100px] rounded-full">
              <i className="bi bi-arrow-counterclockwise text-white text-5xl"></i>
            </div>
            <div>
              <h3 className="text-[1.625rem] leading-5 mb-3 text-center">
                Ücretsiz İptal ve İade
              </h3>
              <p className="text-center">
                Ürünlerinizi kolayca ve hiçbir ücret
                <br />
                ödemeden iptal ve iade edebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
