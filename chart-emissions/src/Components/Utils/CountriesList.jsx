import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Global from "../Pages/Global/Global";

const CountriesList = (props) => {

    const [countryListWithoutDouble, setCountryListWithoutDouble] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    let countryName = [];
    let countryAbbv = [];
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const list = props.countryList;

    useEffect(() => {
        list.map((item) =>
            countryName.push(item)

        )

        let countryNameWithoutDouble = [...new Set(countryName)]
        setCountryListWithoutDouble(countryNameWithoutDouble)
    }, [list])

    console.log(countryName)

    if (!props.countryList) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <main className="main-countries">

            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="button-countries"
            >
                Countries
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                {countryListWithoutDouble.map((item, index) =>
                    <MenuItem key={index} onClick={handleClose}>
                        <Link to={`/Global/${item[0]}`}>{item[1]}</Link>
                    </MenuItem>
                )}
            </Menu>
        </main>
    )
}

export default CountriesList;