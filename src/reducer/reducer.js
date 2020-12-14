const initialState = {
    opiniones : []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'get_opinion':
            return {
                ...state,
                opiniones: state.opiniones.concat([{data: action.data}])
            }
    
        default:
            return state;
    }
}

export default reducer;