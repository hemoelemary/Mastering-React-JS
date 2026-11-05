const Products = ({name,price,category,image,isAvailable})=>{
    return(
        <div className="rounded-lg bg-slate-200 w-1/4">
            <img className="w-full" src={image} style={{height:'150px'}}></img>
            <h3>{name}</h3>
            <h3>{price}</h3>
            <small>{category}</small>
            {isAvailable?<>
            <div className='flex justify-between'>
                <h3 className='text-blue-500'>199$</h3>
                <button className='text-white bg-blue-500'>Add to Cart</button>
            </div>
            </>:<div class='text-red-600'>Out Of Stock</div>}
        </div>
    )
}
export default Products;