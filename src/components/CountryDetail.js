import React from 'react';
const CountryDetail = ({country}) =>{



    const countryLanguages = country.languages.map((language) => {
        return<p>{language.name}</p>
        console.log(language);
    })
    return(
<div>
    <h3>Name: {country.name}</h3>
    <h3>Capital: {country.capital}</h3>
    <h3>Region: {country.region}</h3>
    <h3>Population: {country.population}</h3>
    <h3>Language: {countryLanguages} </h3>
    <img src={country.flag} width="800" height="400"/>
    
</div>    
)
}
export default CountryDetail