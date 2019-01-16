import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/components/country-short-info.scss';

const CountryShortInfo = props => (
  <div className="country_short_info">
    name: {props.data.name} <br/>
    ISO code: {props.data.alpha3Code} <br/>
    <Link to={`/${props.data.alpha3Code}`}>Read more</Link>
  </div>
);

export default CountryShortInfo;