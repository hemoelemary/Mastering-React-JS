const UserList = ()=>{
    const users = [
        {id:1,name:'alice',age:25},
        {id:2,name:'Bob',age:30},
        {id:3,name:'Charlie',age:22}
    ]
    return(
        <>
        {users.map((v)=>(
            <p key={v.id}>{v.name}</p>
        ))}
        </>
    )
}
export default UserList;