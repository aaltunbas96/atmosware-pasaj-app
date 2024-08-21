import React from "react";

export default function LoginHeader() {
  return (
    <header className="py-6 h-[5.9375rem] bg-gray-200">
      <div className="container xs:max-w-full md:max-w-[40rem] flex justify-center items-center">
        <h1 className="inline-block">
          <a href="/">
            <img
              src="https://fastlogin.com.tr/fast_static/assets/images/101200_logo_v2.png?v=202407-last"
              alt="Turkcell Logo"
              className="h-[50px]"
            />
          </a>
        </h1>
      </div>
    </header>
  );
}
