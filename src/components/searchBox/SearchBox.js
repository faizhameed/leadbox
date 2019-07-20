import React, {useState,useEffect} from 'react'
import "./SearchBox.css";
import dwnbtn from "../../images/noun_Download_2120379.svg"
import backArrow from "/home/faiz/Documents/Corefactors/leadbox/src/images/Mask Group 3.svg"


function SearchBox() {

    let outclick;

    const [chipValue,setChipValue] = useState([]);
    const [savedBy/* ,setSavedBy */]=useState(["By Shobana","Vimal's Lead", "Akshay Dec"]);

    useEffect(() => {
        // Update the document title using the browser API
        document.addEventListener('mousedown',handleOutClick,false);
      });

      useEffect( () => () =>{
        document.addEventListener('mousedown',handleOutClick,false);  
      }, [  ] );
    


    const handleInputValue=(event)=>{
        if(event.keyCode === 13)
       { const val = document.getElementById("searchInput");
        if(val.value!=="" && chipValue.length<=4){
            if(!chipValue.includes(val.value))
            setChipValue([...chipValue,val.value]);
            else alert("Item already added");
            val.value= "";}
    }

    }

    const handleHide = ()=>{
        var element = document.getElementById("searchoptions");
  element.classList.remove("hide");
    }

    const handleOutClick = (e)=>{
        console.log(outclick)
        if(!outclick || !outclick.contains(e.target)){
            
        var element = document.getElementById("searchoptions");
        element.classList.add("hide");}
      }
      const handleItemOptions=(item)=>{
          console.log(item);
          document.getElementById("searchInput").value = item;
      }
    
    const handleDelete = (item) =>{
        /*  const chip = [...chipValue.filter(i=>i!==item)]; */
         setChipValue([...chipValue.filter(i=>i!==item)]);        
    }
    const listOptions=["First Name","Last Name", "Address","Lead Type","Phone","Email ID"]
    
    const chipstyle = {
        listStyleType: 'none',
        fontSize:'.8em',
        position:'absolute',
        top: '70.5%',
        left:' 29.5%',
        margin:'0',
        padding:'0',
        display:'flex',
        
    }
    const liStyle = {
        padding:".5px",
        backgroundColor:'white',
        borderRadius:'8px',
        margin:'1px',
        color:' #262c5b',
        marginLeft: '7px',
    }
    return (
        <div className="SearchBoxContainer">
            <button className = "back"><img src ={backArrow} alt = ""/>  Back</button>
            <div className = "SearchBoxWrapper select">    
            <input onClick = {handleHide} onKeyDown={handleInputValue} id = "searchInput" placeholder="Filter (Type something…..)" className="search"/>
            </div>
            <div className = "SavedBy">
            <p style = {{color:'grey'}}>Saved:</p>
            {savedBy.map((item,i) =><p className="SavedByValues" key = {i+item}>{item}</p>)}
            </div>
            <div className="select2">
            <select className="btn2">  
                    <option>All Leads</option>
                    <option>My Leads</option>
                    <option>Your Leads</option>
                    <option>Hot Leads</option>
                </select>
            </div>
            <button className = "btn">Search</button>
            <ul style = {chipstyle}>
            {chipValue.map((item,i) =>
             <li style = {liStyle} key = {i+item}>{item} 
             <button className="btn1" onClick={() => handleDelete(item)}>X</button>
             </li>)}
            </ul> 
            <button className = "nlbtn">New Lead +</button>
            <button className = "imbtn">Import</button>
            <button className = "dwnbtn"><img src ={dwnbtn} alt = "Download"/></button>

            {/* List box appears only when clicking the input area */} 
            <div ref={el=>outclick=el} id ="searchoptions" className="searchoptions hide">
            <ul style = {{listStyleType:"none",display:"inline-block"}}>
            {
                listOptions.map(item=><li className = "listOptions" key={item} onClick={() => handleItemOptions(item)} >{item}</li>)
            }
            </ul>
            </div>
        </div>
    )
}

export default SearchBox
