import React, { useRef, useState,useEffect  } from 'react';
import countryDetails from '../data.json';
import '../styles/SearchNav.css';
import { useTheme } from '../context/ThemeContext';

const SearchNav = () => {
    const { isDarkMode } = useTheme();
    const [region, setRegion] = useState('');
    const [searchedCountry, setSearchedCountry] = useState('');
    const selectRef = useRef(null);
    const searchRef = useRef(null);

    const uniqueRegions = new Set(countryDetails.map(item => item.region));
    const uniqueRegionsArray = Array.from(uniqueRegions);

    const handleChange = () => {
        const selectedValue = selectRef.current.value;
        setRegion(selectedValue);
    };
    useEffect(() => {
    
        setSearchedCountry('');
     
    }, [region ]);
    const handleChangeSearch = event => {
        if (event.key === 'Enter') {
            const searchCountry = searchRef.current.value;
            setSearchedCountry(searchCountry);
        }
    };

    const filteredCountries = countryDetails.filter(item => {
        return region === '' || item.region.toLowerCase() === region.toLowerCase();
    });

    const searchedCountryResults = countryDetails.filter(item => {
        return searchedCountry === '' || item.name.toLowerCase() === searchedCountry.toLowerCase();
    });

    return (
        <div className={`mainPage ${isDarkMode ? 'darkBackground' : 'backgroundColor'} search-nav`}>
            <div className="searchNav">
                <div className="search">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search for a country..." onKeyDown={handleChangeSearch} ref={searchRef} style={{color : isDarkMode ? '' : '#858585'}} />
                </div>

                <div className="select">

               
                <select onChange={handleChange} ref={selectRef}>
                    <option value="">Filter by Region</option>
                    {uniqueRegionsArray.map((region, index) => (
                        <option key={index} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
                </div>
            </div>
            <div className="cards">
                {(searchedCountry === '' ? filteredCountries : searchedCountryResults).map((item, index) => (
                    <div className="card" key={index}>
                      <img src= {item.flags.png || item.flags.svg} alt="" />

                      <p><span>{item.name}</span></p>
                      <p><span>Population: </span>{item.population}</p>
                      <p><span>Region: </span>{item.region}</p>
                      <p><span>Capital: </span>{item.capital}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchNav;
