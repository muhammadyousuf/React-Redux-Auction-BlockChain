export const addProduct = (data) => {
    return{
        type: 'ADD_PRODUCT',
        data
    }

}

export const removeProduct = () => {
    return{
        type: 'REMOVE_PRODUCT',
    }

}