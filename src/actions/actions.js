import actionTypes from './actionTypes';

export let fetchAllCountries = () => {
  return dispatch => {

    dispatch(fetchAllCountriesRequest());

    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText || 'Some exception');
        }
        return response.json();
      })
      .then(countries => {
        dispatch(fetchAllCountriesSuccess(countries));
      })
      .catch(error => {
        dispatch(fetchAllCountriesFailure(error.message));
      })
  };

};

export let fetchAllCountriesRequest = () => {
  return {
    type: actionTypes.ALL_COUNTRIES_FETCH
  }
};

export let fetchAllCountriesSuccess = countries => {
  return {
    type: actionTypes.ALL_COUNTRIES_FETCH_SUCCESS,
    countries
  }
};

export let fetchAllCountriesFailure = text => {
  return {
    type: actionTypes.ALL_COUNTRIES_FETCH_FAILURE,
    text
  }
};

export let fetchCountryById = (code) => {
  return dispatch => {

    dispatch(fetchCountryDetailsRequest());

    fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText || 'Some exception');
        }
        return response.json();
      })
      .then(country => {
        dispatch(fetchCountryDetailsSuccess(country));
      })
      .catch(error => {
        dispatch(fetchCountryDetailsFailure(error.message))
      });
  }
};

export function fetchCountryDetailsRequest() {
  return {
    type: actionTypes.COUNTRY_FETCH
  }
}

export function fetchCountryDetailsSuccess(country) {
  return {
    type: actionTypes.COUNTRY_FETCH_SUCCESS,
    country
  }
}

export function fetchCountryDetailsFailure(errorText) {
  return {
    type: actionTypes.COUNTRY_FETCH_FAILURE,
    errorText
  }
}
