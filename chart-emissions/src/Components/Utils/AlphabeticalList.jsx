import { useEffect, useState } from "react";
import CountriesList from "./CountriesList";

const AlphabeticalList = (props) => {


    const [countryList, setCountryList] = useState([]);


    useEffect(() => {

        setCountryList(Object.entries(props.countriesList))

    }, [])


    if (!countryList) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <CountriesList
            countryList={countryList}
        />
    )
}

export default AlphabeticalList;