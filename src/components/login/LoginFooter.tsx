import React from "react";

export default function LoginFooter() {
  return (
    <footer className="py-5 bg-gray-200">
      <div className="container xs:max-w-full md:max-w-[40rem]">
        <a href="#" className="flex justify-center gap-2 relative">
          <h2 className="font-sans flex justify-center items-center gap-1 text-black text-sm leading-[1.43rem] mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-[#2962ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            HızlıGiriş
          </h2>
          <span className="text-[#2962ff] text-sm leading-[1.43rem] relative top-px">
            Bilgilerini Güncelle
          </span>
        </a>
        <nav className="flex justify-between pt-[1.375rem] px-4">
          <a href="/" className="text-sm leading-[1.43rem]">
            Aydınlatma Metni ve Çerez
          </a>
          <a href="/" className="text-sm leading-[1.43rem]">
            Hakkında
          </a>
        </nav>
      </div>
    </footer>
  );
}
