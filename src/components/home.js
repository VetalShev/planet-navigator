import React from 'react';
import CountryList from './countryList';
import LayoutDefault from "../containers/layoutDefault";
import '../sass/pages/home.scss';

class Home extends React.Component {

  state = {
    countries: [],
    loading: true
  };

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => {
        return response.json();
      })
      .then(countries => {
        this.setState({
          countries: countries
        });
      })
      .catch(console.error)
      .then(() => {
        this.setState({
          loading: false
        });
      })
  }

  render() {
    let {countries, loading} = this.state;

    return (
      <LayoutDefault match={this.props.match}>
        {loading ?
          'Wait, the list of countries is loading...' :
          countries.length > 0 ?
            <CountryList data={countries}/> :
            'No countries'
        }

      </LayoutDefault>
    )
  }
}

export default Home;