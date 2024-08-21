import ProductDetailsBottom from "@/components/productDetails/ProductDetailsBottom";
import ProductDetailsTop from "@/components/productDetails/ProductDetailsTop";
import DetailsBreadcrumb from "@/components/productDetails/DetailsBreadcrumb";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

export default function ProductDetails() {
  return (
    <RootLayout>
      <main>
        <DetailsBreadcrumb />
        <ProductDetailsTop />
        <ProductDetailsBottom />
      </main>
    </RootLayout>
  );
}
