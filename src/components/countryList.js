import React, {Fragment} from 'react';
import CountryShortInfo from './countryShortInfo';

export default (props) => {

  return (
    <Fragment>
      {props.data.map(shortCountryInfo => {
        return <CountryShortInfo data={shortCountryInfo}/>
      })}
    </Fragment>
  )

}