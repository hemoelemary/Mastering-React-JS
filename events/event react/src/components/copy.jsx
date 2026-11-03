import React from 'react'



function Copy() {
    const copyHandler = ()=>{
        console.log('stop stealing my content')
    }
    return (
    <div onCopy={copyHandler}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi provident incidunt quaerat dolores at, veniam, voluptatum suscipit animi dolorum tempore, distinctio aliquid consequuntur. Eligendi, voluptas. Fugit porro expedita exercitationem unde.
    </div>
  )
}

export default Copy