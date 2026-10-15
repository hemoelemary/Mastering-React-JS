const Greeting = ()=>{
    const date = new Date().getDate()
    const name = 'John'
    return(
        <>
            <h1>Greeting</h1>
            <p>{date}</p>
            <p>{name}</p>
            
        </>
    )
}
export default Greeting;