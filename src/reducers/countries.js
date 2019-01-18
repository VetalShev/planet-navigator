import actionTypes from '../actions/actionTypes';

const initialState = {
  countries: [],
  errorText: null,
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_COUNTRIES_FETCH:
      return {
        ...state,
        errorText: null,
        loading: true
      };
    case actionTypes.ALL_COUNTRIES_FETCH_SUCCESS:
      return {
        ...state,
        countries: action.countries,
        loading: false,
        errorText: null
      };
    case actionTypes.ALL_COUNTRIES_FETCH_FAILURE:
      return {
        ...state,
        errorText: action.text,
        loading: false
      };
    default:
      return state;
  }
}