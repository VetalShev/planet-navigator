import React from 'react';
import {connect} from 'react-redux';
import {fetchAllCountries} from '../actions/actions';
import Home from '../components/home';

class ConnectedHome extends React.Component {

  componentDidMount() {
    this.props.fetchAllCountries();
  }

  render() {
    return (
      <Home {...this.props} />
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllCountries: () => dispatch(fetchAllCountries())
  }
};

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    loading: state.countries.loading,
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectedHome);

export default HomeContainer;