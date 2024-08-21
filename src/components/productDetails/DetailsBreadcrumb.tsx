import React from "react";

export default function DetailsBreadcrumb() {
  return (
    <section className="details-breadcrumb bg-[#f8f8f8]">
      <div className="container">
        <ul className="flex items-center xs:justify-center md:justify-start gap-1 h-[71px] relative">
          <li>
            <a
              href="/"
              className="text-sm hover:text-[#ffc900] duration-300 ease-linear"
            >
              Pasaj
            </a>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 text-[#ffc900] relative top-px"
          >
            <path
              fill-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
          <li>
            <a
              href="http://localhost:3001/categories"
              className="text-sm hover:text-[#ffc900] duration-300 ease-linear"
            >
              Ürün Kategorisi
            </a>
          </li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 text-[#ffc900] relative top-px"
          >
            <path
              fill-rule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
          <li>
            <a
              href="/"
              className="text-sm hover:text-[#ffc900] duration-300 ease-linear"
            >
              Marka
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
