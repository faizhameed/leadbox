import React from 'react'

function UserModal(props) {
    console.log("modal",props.data)
    return (
        <div style = {{width:"30%",height:"auto",border:"1px solid blue"}}>
        
        <div> 
        <h3>{props.data.name}  
        </h3>
        <p style = {{fontWeight:"bolder"}}>Address</p>
        <p>{props.data.address.street}  
        </p>
        <p>{props.data.address.suite}  
        </p>
        <p>{props.data.address.city}  
        </p>
        </div>
          <button className="btn3" onClick = {()=>props.handleModal(false)}>close</button> 
        </div>
    )
}

export default UserModal
