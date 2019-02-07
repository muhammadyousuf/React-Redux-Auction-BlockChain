 const addProduct = (data) => {
    return{
        type: 'ADD_PRODUCT',
        data
    }

}

const removeProduct = () => {
    return{
        type: 'REMOVE_PRODUCT',
    }

}
export {
    addProduct,
    removeProduct
}