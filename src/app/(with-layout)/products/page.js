import GetAllProducts from "@/utils/GetAllProducts";
import React from "react";
import SingleProduct from "./SingleProduct";

const ProductPage = async ({ searchParams }) => {
  console.log(searchParams);
  const products = await GetAllProducts(searchParams.categoryId);
  return (
    <div className="mt-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id}>
            
          </SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
