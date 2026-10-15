const ProductInfo = ()=>{
    const product = {
        'name':'laptop',
        'price':'$1200',
        'availability':'In Stock'
    }
    return(
        <>
            <p>
                name:{product['name']}
            </p>
            <p>
                price:{product['price']}
            </p>
            <p>
                av:{product['availability']}
            </p>
        </>
    )
}
export default ProductInfo;