import { 
  GET_API_BEERS, 
  GET_API_BEERS_SUCCESS, 
  GET_API_BEERS_FAILURE 
} from '../actions/index';

const initialState = {
    beer: [],
    isFetching: false,
    error: ''
};

export const beerReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_API_BEERS:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case GET_API_BEERS_SUCCESS:
      return {
        ...state,
        beer: action.payload,
        isFetching: false,
        error: ''
      }
    case GET_API_BEERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: ''
      }
    default:
      return state
  };
};