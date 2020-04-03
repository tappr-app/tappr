import { 
  POST_USER, 
  USER_CREATED, 
  SET_ERROR, 
  USER_LOGIN, 
  LOGGED_IN,
  GET_USER_DATA,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  UPDATE_USER_DATA,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE,
  GET_API_BEERS, 
  GET_API_BEERS_SUCCESS, 
  GET_API_BEERS_FAILURE,
  ADD_MY_BREWS,
  ADD_MY_BREWS_SUCCESS,
  ADD_MY_BREWS_FAILURE,
  ADD_PAIRING,
  ADD_PAIRING_SUCCESS,
  ADD_PAIRING_FAILURE,
  UPDATE_FOOD_PAIRING,
  UPDATE_FOOD_PAIRING_SUCCESS,
  UPDATE_FOOD_PAIRING_FAILURE,
  DELETE_FOOD_PAIRING,
  DELETE_FOOD_PAIRING_SUCCESS,
  DELETE_FOOD_PAIRING_FAILURE,
  ADD_BEER,
  ADD_BEER_SUCCESS,
  ADD_BEER_FAILURE,
  UPDATE_BEER,
  UPDATE_BEER_SUCCESS,
  UPDATE_BEER_FAILURE,
  ADD_BEER_COMMENT,
  ADD_BEER_COMMENT_SUCCESS,
  ADD_BEER_COMMENT_FAILURE,
  DELETE_BEER_COMMENT,
  DELETE_BEER_COMMENT_SUCCESS,
  DELETE_BEER_COMMENT_FAILURE,
  UPDATE_BEER_COMMENT,
  UPDATE_BEER_COMMENT_SUCCESS,
  UPDATE_BEER_COMMENT_FAILURE,
} from '../actions/index';


const initialState = {
    beer: [],
    active_user: {},
    isFetching: false,
    isPosting: false,
    isPutting: false,
    isDeleting: false,
    readyToMount: false,
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
    case GET_USER_DATA:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        active_user: action.payload,
        isFetching: false,
        readyToMount: true,
        error: ''
      }
    case GET_USER_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case UPDATE_USER_DATA:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        active_user: action.payload
      }
    case UPDATE_USER_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
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
    case ADD_MY_BREWS:
      return{
        ...state,
        isPosting: true
      }
    case ADD_MY_BREWS_SUCCESS:
      return{
        ...state,
        isPosting: false
      }
    case ADD_MY_BREWS_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    case ADD_PAIRING:
      return{
        ...state,
        isPosting: true
      }
    case ADD_PAIRING_SUCCESS:
      return{
        ...state,
        isPosting: false
      }
    case ADD_PAIRING_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    case UPDATE_FOOD_PAIRING:
      return{
        ...state,
        isPutting: true
      }
    case UPDATE_FOOD_PAIRING_SUCCESS:
      return{
        ...state,
        isPutting: false
      }
    case UPDATE_FOOD_PAIRING_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    case DELETE_FOOD_PAIRING:
      return{
        ...state,
        isDeleting: true
      }
    case DELETE_FOOD_PAIRING_SUCCESS:
      return{
        ...state,
        isDeleting: false
      }
  case DELETE_FOOD_PAIRING_FAILURE:
    return{
      ...state,
      error: action.payload
    }
    case ADD_BEER_COMMENT:
      return{
        ...state,
        isPosting: true
      }
    case ADD_BEER_COMMENT_SUCCESS:
      return{
        ...state,
        isPosting: false
      }
  case ADD_BEER_COMMENT_FAILURE:
    return{
      ...state,
      error: action.payload
    }
    case DELETE_BEER_COMMENT:
      return{
        ...state,
        isDeleting: true
      }
    case DELETE_BEER_COMMENT_SUCCESS:
      return{
        ...state,
        isDeleting: false
      }
  case DELETE_BEER_COMMENT_FAILURE:
    return{
      ...state,
      error: action.payload
    }
    case UPDATE_BEER_COMMENT:
      return{
        ...state,
        isPutting: true
      }
    case UPDATE_BEER_COMMENT_SUCCESS:
      return{
        ...state,
        isPutting: false
      }
    case UPDATE_BEER_COMMENT_FAILURE:
      return{
        ...state,
        error: action.payload
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
