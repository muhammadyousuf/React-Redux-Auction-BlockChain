 const addProduct = (product) => {
    return{
        type: 'ADD_PRODUCT',
        product
    }

}

const removeProduct = () => {
    return{
        type: 'REMOVE_PRODUCT',
    }

 }
export  {
    addProduct,
    removeProduct
}