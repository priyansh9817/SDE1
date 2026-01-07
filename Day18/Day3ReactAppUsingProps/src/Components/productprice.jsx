function Product ({name,price,instock}){
    return(
        <>
        <p>Name:{name}, Price : {price}, | {instock ? "Available" : "Out of stock"}</p>
        </>
    )
};

export default Product;