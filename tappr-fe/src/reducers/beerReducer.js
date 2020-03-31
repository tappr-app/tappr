import { 
  POST_USER, 
  USER_CREATED, 
  SET_ERROR, 
  USER_LOGIN, 
  LOGGED_IN,
  GET_API_BEERS, 
  GET_API_BEERS_SUCCESS, 
  GET_API_BEERS_FAILURE 
} from '../actions/index';


const initialState = {
    beer: [],
    isFetching: false,
    isPosting: false,
    error: ''
};

export const beerReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_USER:
      return {
        ...state,
        isPosting: true
      }
    case USER_CREATED:
      return {
        ...state,
        isPosting: false
      }
    case USER_LOGIN:
      return {
        ...state,
        isPosting: true
      }
    case LOGGED_IN:
      return {
        ...state,
        isPosting: false
      }
    case SET_ERROR:
      return{
        ...state,
        error: action.payload

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