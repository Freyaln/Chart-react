import { useEffect, useState } from "react";
import CountriesList from "./CountriesList";

const AlphabeticalList = (props) => {

    console.log(props.countriesList)

    const [countryList, setCountryList] = useState([]);

    //const list = Object.entries(props.countriesList)

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