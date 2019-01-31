import React from 'react';
import {connect} from 'react-redux';
import {fetchAllCountries} from '../actions/actions';
import Home from '../components/home';

class HomeContainer extends React.Component {

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);