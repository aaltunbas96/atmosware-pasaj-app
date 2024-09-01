import CategoriesFilter from "@/components/categories/CategoriesFilter";
import CategoriesTabs from "@/components/categories/CategoriesTabs";
import ProductCard from "@/components/home/ProductCard";
import RootLayout from "@/components/layout/RootLayout";
import { useSearchProductsListStore } from "@/store/searchProductsListStore";

interface Product {
  id: string;
  productCardImg1: string;
  productCardImg2: string;
  name: string;
  trademark: string;
  color: string;
  price: number;
  point: number;
}

export default function categories() {
  const { filteredProducts, productsFromSearch } = useSearchProductsListStore();

  return (
    <RootLayout>
      <main>
        <section className="categories mb-20">
          <div className="container">
            <CategoriesTabs />
            <div className="c-box flex xs:flex-col md:flex-row">
              <div className="c-b-left xs:w-full md:w-[25%] xs:px-0 md:px-2.5">
                <CategoriesFilter />
              </div>
              <div className="c-b-right xs:w-full md:w-[75%] px-2.5">
                <div className="c-b-product-list flex flex-wrap justify-center md:justify-start gap-4 mx-[-0.625rem]">
                  {(filteredProducts.length > 0
                    ? filteredProducts
                    : productsFromSearch
                  )?.map((product: Product, index: number) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </RootLayout>
  );
}
