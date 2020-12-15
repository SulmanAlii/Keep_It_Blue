const initialState = {
    opiniones : [],
    tokenData : []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'get_opinion':
            return {
                ...state,
                opiniones: state.opiniones.concat([{data: action.data}])
            }

        case 'get_tokenData' : 
            return {tokenData : state.tokenData.concat([{data:action.data}])}

    
        default:
            return state;
    }
}

export default reducer;