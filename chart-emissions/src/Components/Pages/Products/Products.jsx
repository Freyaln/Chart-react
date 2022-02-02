import axios from 'axios';
import { useState, useEffect } from 'react';
import ProductsList from '../../Utils/ProductsList';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [methaneDesc, setMethaneDesc] = useState([]);
    const [carbonMonoxidDesc, setCarbonMonoxidDesc] = useState([]);
    const [ozoneDesc, setOzoneDesc] = useState([]);
    const [nitrogenDioxideDesc, setNitrogenDioxideDesc] = useState([]);
    const [pending, setPending] = useState(false);

    const APIConnect = axios.create({
        timeout: 20000,
        validateStatus: function (status) {
            return status >= 200 && status < 300;
        },
    })

    useEffect(() => {

        (async () => {
            const { data } = await APIConnect.get(`https://api.v2.emissions-api.org/api/v2/products.json`, { cache: 'reload' })
            setProducts(data);
            setMethaneDesc(data[0]);
            setCarbonMonoxidDesc(data[1])
            setOzoneDesc(data[2])
            setNitrogenDioxideDesc(data[3]);
            setPending(true);
        })();

    }, [APIConnect])

    if (pending && products.length > 0) {
        return (
            <ProductsList
                methaneDesc={methaneDesc}
                carbonMonoxidDesc={carbonMonoxidDesc}
                ozoneDesc={ozoneDesc}
                nitrogenDioxideDesc={nitrogenDioxideDesc} />
        )
    }
    return (
        <p>Loading...</p>
    )
}


export default Products;