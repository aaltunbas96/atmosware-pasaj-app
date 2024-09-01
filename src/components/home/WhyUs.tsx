import useCms from "@/hooks/useCms";
import useGetLanguage from "@/hooks/useGetLanguage";
import React from "react";

export default function WhyUs() {
  const cms = useCms();
  useGetLanguage();

  return (
    <section className="why-us">
      <div className="container">
        <h2 className="text-center mb-5 text-[34px] leading-5">{cms?.htWhy}</h2>
        <div className="why-us-top text-center pb-[30px]">
          <p className="mb-5 leading-[1.6rem]">
            {cms?.wuTop1}
            <br />
            {cms?.wuTop2}
          </p>
        </div>
        <div className="why-us-bottom flex flex-wrap justify-between items-center">
          <div className="w-u-box xs:w-full md:w-[20.625rem] flex flex-col items-center">
            <div className="w-u-icon flex justify-center items-center mb-[1.5625rem] w-[100px] h-[100px] rounded-full">
              <i className="bi bi-truck text-white text-5xl"></i>
            </div>
            <div>
              <h3 className="text-[1.625rem] leading-5 mb-3 text-center">
                {cms?.wuBox1Title}
              </h3>
              <p className="text-center">
                {cms?.wuBox1}
                <br />
                {cms?.wuBox12}
                <br />
                {cms?.wuBox13}
              </p>
            </div>
          </div>
          <div className="w-u-box xs:w-full md:w-[20.625rem] flex flex-col items-center xs:pt-4 md:pt-0">
            <div className="w-u-icon flex justify-center items-center mb-[1.5625rem] w-[100px] h-[100px] rounded-full">
              <i className="bi bi-credit-card-fill text-white text-5xl"></i>
            </div>
            <div>
              <h3 className="text-[1.625rem] leading-5 mb-3 text-center">
                {cms?.wuBox2Title}
              </h3>
              <p className="text-center">
                {cms?.wuBox2}
                <br />
                {cms?.wuBox22}
                <br />
                {cms?.wuBox23}
              </p>
            </div>
          </div>
          <div className="w-u-box xs:w-full md:w-[20.625rem] flex flex-col items-center xs:pt-4 md:pt-0 md:pb-[1.35rem]">
            <div className="w-u-icon flex justify-center items-center mb-[1.5625rem] w-[100px] h-[100px] rounded-full">
              <i className="bi bi-arrow-counterclockwise text-white text-5xl"></i>
            </div>
            <div>
              <h3 className="text-[1.625rem] leading-5 mb-3 text-center">
                {cms?.wuBox3Title}
              </h3>
              <p className="text-center">
                {cms?.wuBox3}
                <br />
                {cms?.wuBox32}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
