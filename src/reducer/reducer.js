const initialState = {
    opiniones : []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'get_opinion':
            return {
                ...state,
                opinion : state.opiniones.concat([{opinions: action.data}])
            }
    
        default:
            break;
    }
}

export default reducer;