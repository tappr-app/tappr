import { POST_USER, USER_CREATED, SET_ERROR, USER_LOGIN, LOGGED_IN } from "../actions";

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
      }
    default:
      return state
  };
};