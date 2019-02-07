const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            return { ...state, product: action.product }
        }
        case 'REMOVE_PRODUCT': {
            return { ...state, product: null }
        }
        default:{
            return state;
        }
    }

}
export default reducer;