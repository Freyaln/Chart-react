import { useState, useEffect } from 'react';
import GlobalListGaz from './GlobalListGaz';


const ProductsList = (props) => {

    const products = props.products;
    const methaneDesc = props.methaneDesc;
    const carbonMonoxidDesc = props.carbonMonoxidDesc;
    const ozoneDesc = props.ozoneDesc;
    const nitrogenDioxideDesc = props.nitrogenDioxideDesc;


    return (

        <GlobalListGaz
            products={products}
            methaneDesc={methaneDesc}
            carbonMonoxidDesc={carbonMonoxidDesc}
            ozoneDesc={ozoneDesc}
            nitrogenDioxideDesc={nitrogenDioxideDesc} />
    )
}

export default ProductsList;