import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchCountryById} from '../actions/actions';
import CountryFullInfo from '../components/countryFullInfo';

class CountryFullInfoContainer extends React.Component {

  componentDidMount() {
    const {countryCode} = this.props.match.params;
    this.props.fetchCountryById(countryCode);
  }

  render() {
    return (
      <CountryFullInfo {...this.props} />
    );
  }

}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCountryById: (code) => dispatch(fetchCountryById(code))
  }
};

const mapStateToProps = state => {
  const {country, loading, errorText} = state.currentCountry;

  return {
    country,
    loading,
    errorText
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFullInfoContainer);