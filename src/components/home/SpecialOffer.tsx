import useCms from "@/hooks/useCms";
import useGetLanguage from "@/hooks/useGetLanguage";
import React from "react";

export default function SpecialOffer() {
  const cms = useCms();

  return (
    <section className="special-offer xs:py-[25px] md:py-[50px]">
      <div className="container">
        <div className="s-o-box rounded-[10px] p-8 pl-0 flex justify-between items-center border-[10px] border-[#f1f0f8] xs:h-[4.75rem] md:h-[9.5rem]">
          <div className="s-o-b-content ml-5 flex xs:gap-18 md:gap-36 items-center">
            <img
              src="https://ffo3gv1cf3ir.merlincdn.net/pasaj_static_lib/passage-assets/common/images/content/banners/teknoloji-group-18.png?1722486136000"
              alt="Technological Devices"
              className="xs:w-[50%] md:w-[auto]"
            />
            <div>
              <h2 className="xs:text-[0.75rem] md:text-[1.5rem] text-white">
                {cms?.soTitle}
              </h2>
            </div>
          </div>
          <div className="s-o-b-button">
            <a
              href="/"
              className="flex justify-between items-center xs:min-w-[4.375rem] xs:h-5 md:min-w-[8.75rem] md:h-10 bg-[#ffc900] xs:px-3 md:px-6 rounded-[2.5rem] hover:bg-[#ffd917] transition duration-200 ease-in"
            >
              {cms?.hsButton}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="xs:size-5 md:size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
