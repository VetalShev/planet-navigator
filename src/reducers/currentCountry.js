import actionTypes from '../actions/actionTypes';

const initialState = {
  country: null,
  errorText: null,
  loading: false
};

export default (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.COUNTRY_FETCH:
      return {
        country: null,
        errorText: null,
        loading: true
      };
    case actionTypes.COUNTRY_FETCH_SUCCESS:
      return {
        country: action.country,
        errorText: null,
        loading: false
      };
    case actionTypes.COUNTRY_FETCH_FAILURE:
      return {
        country: null,
        errorText: action.text,
        loading: false
      };
    default:
      return state;
  }

}