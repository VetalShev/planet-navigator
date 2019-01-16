import React from 'react';
import CountryShortInfo from './countryShortInfo';

const CountryList = (props) => (

  <div className="country_list">
    {props.data.map(shortCountryInfo => (
      <CountryShortInfo key={shortCountryInfo.alpha3Code}
                        data={shortCountryInfo}/>
    ))}
  </div>

);

export default CountryList;