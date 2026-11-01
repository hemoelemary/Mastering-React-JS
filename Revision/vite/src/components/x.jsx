const X = (prop)=>{
    const age = 20;
    const price = 100;
    return(
        <>
            <p>{age>=18?'adult':'minor'}</p>
            <p>{price>=100?'dont buy':'buy'}</p>
            <p>{prop.name}</p>
            <p>{prop.age}</p>
            
        </>
    )
}
export default X;