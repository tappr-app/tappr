const initialState = {
    beer: [],
    isFetching: false,
    error: ''
}

export const beerReducer = (state = initialState, action) => {
    // console.log('ACTION TAKEN', action);
    // console.log('PAYLOAD', action.payload)
    switch(action.type){
        default:
            return state;
    }
}