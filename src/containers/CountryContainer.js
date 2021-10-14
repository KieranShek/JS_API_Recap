import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelector';
import './CountryContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }
    const onCountrySelected = function(country){
        console.log(country);
        setSelectedCountry(country);
    }

    var totalPopulation = 0

    const PopTotal = countries.reduce((totalPopulation, country) => {
        return totalPopulation += country.population
      }, 0)

    return (
        <div className="main-container">
        <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
            <p>World Population: {PopTotal}</p>
        </div>
    )
}

export default CountryContainer;
