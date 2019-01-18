import React from 'react';
import CountryList from './countryList';
import LayoutDefault from "./layoutDefault";
import '../sass/pages/home.scss';

const Home = (props) => (

  <LayoutDefault match={props.match}>
    {props.loading ?
      'Wait, the list of countries is loading...' :
      props.countries.length > 0 ?
        <CountryList data={props.countries}/> :
        'No countries'
    }
  </LayoutDefault>

);

export default Home;