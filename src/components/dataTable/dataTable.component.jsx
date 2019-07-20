import React, { useState,useEffect} from 'react';

import {Table} from 'react-bootstrap';
import UserModal from './modal/modal.component';
import "./table.css";

function DataT() {


  
    
    
    const handleDataClick=(data)=>{
        setclickData(data);
        handleModal(true)
        console.log("function clicked",data)

        }
        const handleModal=(val)=>{
           setuseModal(val);
    
            }

    
const [data, setdata] = useState([]);
const [clickData, setclickData] = useState([]);
const [useModal, setuseModal] = useState(false);

async function fetchUrl(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log(json);
    setdata(json);
}

        useEffect(() => {
            fetchUrl();
        },[])
        
    return (
        <div style = {{display:"flex",transition:"0.5s"}}>
  {useModal?<UserModal handleModal= {handleModal} data = {clickData}/>:null}


      
        <Table style={{transition:"0.5s" }} striped bordered size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
         {data.map((item,i)=>{
           return(<tr key ={i}>
            <td key={i+"i"}>{item.id}</td>
            <td key={i+"ii"} style={{cursor:"pointer"}} onClick = {()=>handleDataClick(item)}>{item.name}</td>
            <td key={i+"iii"}>{item.username}</td>
            <td key={i +"iv"}>{item.email}</td>
            </tr> )    
         }) }
          
        </tbody>
      </Table>
      
        </div>
    )
}

export default DataT
