import { 
  POST_USER, 
  USER_CREATED, 
  SET_ERROR, 
  USER_LOGIN, 
  LOGGED_IN,
  GET_API_BEERS, 
  GET_API_BEERS_SUCCESS, 
  GET_API_BEERS_FAILURE,
  ADD_BEER,
  ADD_BEER_SUCCESS,
  ADD_BEER_FAILURE,
  UPDATE_BEER,
  UPDATE_BEER_SUCCESS,
  UPDATE_BEER_FAILURE
} from '../actions/index';


const initialState = {
    beer: [],
    current_user: '',
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
      }
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
    case ADD_BEER:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case ADD_BEER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        beer: [...state.beer, action.payload]
      }
    case ADD_BEER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case UPDATE_BEER:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case UPDATE_BEER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        beer: action.payload
      }
    case UPDATE_BEER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  };
};
