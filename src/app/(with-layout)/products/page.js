import GetAllProducts from '@/utils/GetAllProducts';
import React from 'react';
import SingleProduct from './SingleProduct';

const ProductPage = async({searchParams}) => {
    console.log(searchParams)
const products = await GetAllProducts(searchParams.categoryId)
    return (
        <div>
           {
            products.map((product)=> <SingleProduct product ={product} key={product.id}> </SingleProduct> )
           } 
        </div>
    );
};

export default ProductPage;









