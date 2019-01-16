import React, {Fragment} from 'react';
import LayoutDefault from '../containers/layoutDefault';
import '../sass/components/country-details.scss';

class CountryFullInfo extends React.Component {

  state = {
    country: null,
    loading: true
  };

  componentDidMount() {
    const {countryCode} = this.props.match.params;

    fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText || 'Some exception');
        }
        return response.json();
      })
      .then(country => {
        this.setState({
          country: country
        })
      })
      .catch(console.error)
      .then(() => {
        this.setState({
          loading: false
        });
      })
  }

  render() {
    const {country, loading} = this.state;

    return (
      <LayoutDefault match={this.props.match}>
        {loading ?
          'Wait, the list of countries is loading...' :
          country ?
            (
              <Fragment>
                <div className="layout_content__title">{country.name}</div>
                <div className="country_details">
                  <div className="country_details__info">
                    <div className="country_details__description">
                      Description: Here should be some country description from
                      wikipedia.org
                    </div>
                    <div>Population: {country.population.toLocaleString()}</div>
                    <div>Region: {country.region}</div>
                    <div>Subregion: {country.subregion}</div>
                    <div>Capital: {country.capital}</div>
                    <div>ISO code: {country.alpha3Code}</div>
                    <div>Regional Blocks:
                      {country.regionalBlocs.map(block => (
                        <li key={block.acronym}>{block.name}
                          ({block.acronym})</li>
                      ))}
                    </div>
                  </div>
                  <div className="country_details__flag">
                    <img src={country.flag}
                         alt={(country.name + " national flag")}/>
                  </div>
                </div>
                <div className="country_details__map">
                  <div></div>
                </div>
              </Fragment>
            ) :
            'Sorry, There\'s not detailed information about this country.'
        }
      </LayoutDefault>
    );
  }

}

export default CountryFullInfo;