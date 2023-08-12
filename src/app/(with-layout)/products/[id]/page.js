import GetSingleProduct from '@/utils/GetSingleProduct';
import React from 'react';


const SingleProductPage = async({params}) => {


const Product = await GetSingleProduct(params.id)


    return (
        <div>
           {Product.title}

        </div>
    );
};

export default SingleProductPage;
