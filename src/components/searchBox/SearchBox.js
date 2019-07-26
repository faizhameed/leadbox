import React, {useState,useEffect} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./SearchBox.css";
import dwnbtn from "../../images/noun_Download_2120379.svg"
import backArrow from "/home/faiz/Documents/Corefactors/leadbox/src/images/Mask Group 3.svg"
import { DateRangePicker } from 'react-date-range';
import {Element} from 'react-scroll';
import Select from 'react-select';

function SearchBox() {
    const rangeSelection = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        disabled: false,
        showDateDisplay: true,
    }
    const options = [
        { value: 'hot', label: 'Hot' },
        { value: 'cold', label: 'Cold' },
        { value: 'new', label: 'New' }
      ]
    const [chipValue,setChipValue] = useState([]);
    const [listOptions, setlistOptions]=useState(["First Name","Last Name", "Address","Phone","Email ID"]);
    const originalList = ["First Name","Last Name", "Address","Phone","Email ID"];
    /* const [leadType,setleadType] = useState(options); */
    const [activateInput,setActivateInput]=useState([false]);
    const [dateChip, setDateChip] = useState([]);
    const [selectionRange, setselectionRange] = useState(rangeSelection);
    const [dateflag, setdateflag] = useState(false);
    





    /* Setting chip values based on the input for the keys in the options list */
    const handleInputValue1=(event)=>{
        if(event.keyCode === 13)
        { const val = document.getElementById("searchInput");
        if(val.value!=="" && chipValue.length<=4){
            if(!chipValue.includes(val.value))
            setChipValue([...chipValue,val.value]);
            else alert("Item already added");
            val.value= "";}
        }
    }
    
    /* function inside the list div where user inputs value to the key given in list */
    const handleInputValue2=(event,item)=>{
        if(event.keyCode === 13)
        {
            let val1 = document.getElementById("input2");
            if(val1.value!=="" && val1!==null)
            {
                const val = `${item} : ${val1.value}`
                val1.value = "";
                setChipValue([...chipValue,val]);
                const filteredOptions = listOptions.filter(key=>key!==item);
                setlistOptions([...filteredOptions]);
            }
            
        }
    }
    

    const handleHide = ()=>{
        var element = document.getElementById("searchoptions");
        element.classList.remove("hide");
    }
    
    let outclick; // outclick variable to close the options list when clicking outside
    


    const handleItemOptions=(item)=>{
        var el = document.getElementById('input2');
        if(el)
        el.remove(); 
        var addedclass =document.getElementsByClassName("addlistOptions");
        if(addedclass.length>=1){
                for(let i = 0;i<addedclass.length;i++){
                    addedclass[i].classList.add("listOptions");
                    addedclass[i].classList.remove("addlistOptions");
                }

        }

        var d2 = document.getElementById("listTypeOpt");
        if(d2){
            d2.style.display="none";  
        }
       
       
        var d1 = document.getElementById(item);
        d1.insertAdjacentHTML('beforeend', '<input autocomplete="off" id="input2" />');
        d1.classList.remove("listOptions");
       d1.classList.add("addlistOptions");
        
       setdateflag(false);
      }



    
    const handleDeleteChip = (item) =>{
        /*  const chip = [...chipValue.filter(i=>i!==item)]; */
        
     
           
           let filterChipIndex;
           item.split("").forEach((element,i)=>{
               if (element === ":"){
                   filterChipIndex =  i;
               }
           })
          let addList= item.split("").slice(0,filterChipIndex-1).join("");
          console.log(addList);
            setChipValue([...chipValue.filter(i=>i!==item)]);/* Chips set to new state */
           let keyOfChipValues = [...chipValue.map(item=>{
               item.split("").forEach((element,i)=>{
                   if (element === ":"){
                       filterChipIndex =  i;
                   }
               })
               return item.split("").slice(0,filterChipIndex-1).join("")
           })];
    
           keyOfChipValues = keyOfChipValues.filter(key=>key!==addList);
            var filtered = originalList.filter(
               function(e) {
                 return this.indexOf(e) < 0;
               },
               keyOfChipValues
           );
         /*   console.log("filtered",filtered); */
        
         setlistOptions([...filtered]);
         var el = document.getElementById('input2');
         if(el)
         el.remove();
         var addedclass =document.getElementsByClassName("addlistOptions");
           if(addedclass.length>=1){
                   for(let i = 0;i<addedclass.length;i++){
                       addedclass[i].classList.add("listOptions");
                       addedclass[i].classList.remove("addlistOptions");
                   }
    
           }
        if(addList==="Lead Type"){
            console.log("yes its a ",addList);
            var leadDiv = document.getElementById("leadtype")
           var d1 = document.getElementById("listTypeOpt");
           if(d1 && leadDiv){
           leadDiv.style.display = "block";
           d1.style.display = "none";
    }
    
}
        if(addList==="Date"||addList ==="Date Range"){
         
            setDateChip([...dateChip.filter(i=>i!==item)])
    
        }
        

    }

    
   /* Edit the chip value on Click */
   const editChipValue = (item) =>{
            /*  const chip = [...chipValue.filter(i=>i!==item)]; */
      
            let filterChipIndex;
            item.split("").forEach((element,i)=>{
                if (element === ":"){
                    filterChipIndex =  i;
                }
            })
           let addList= item.split("").slice(0,filterChipIndex-1).join("");
         
           let addValue= item.split("").slice(filterChipIndex+2,item.length).join("");
       
             setChipValue([...chipValue.filter(i=>i!==item)]);
    
            let keyOfChipValues = [...chipValue.map(item=>{
                item.split("").forEach((element,i)=>{
                    if (element === ":"){
                        filterChipIndex =  i;
                    }
                })
                return item.split("").slice(0,filterChipIndex-1).join("")
            })];
    
            keyOfChipValues = keyOfChipValues.filter(key=>key!==addList);
             var filtered = originalList.filter(
                function(e) {
                  return this.indexOf(e) < 0;
                },
                keyOfChipValues
            );
          /*   console.log("filtered",filtered); */
         
          setlistOptions([...filtered]);
          var el = document.getElementById('input2');
          if(el)
          el.remove();
          var addedclass =document.getElementsByClassName("addlistOptions");
        if(addedclass.length>=1){
                for(let i = 0;i<addedclass.length;i++){
                    addedclass[i].classList.add("listOptions");
                    addedclass[i].classList.remove("addlistOptions");
                }

        }
          setActivateInput([true,addList,addValue]);
          if(addList==="Lead Type"){
            console.log("yes its a ",addList);
            var leadDiv = document.getElementById("leadtype")
   var d1 = document.getElementById("listTypeOpt");
   if(d1 && leadDiv){
       leadDiv.style.display = "block";
       d1.style.display = "none";
   }
     
        }

        if(addList==="Date"||addList ==="Date Range"){
            /* come back here later */
            setDateChip([...dateChip.filter(i=>i!==item)])
        }
        var popup = document.getElementById('searchoptions');
        if(popup)
        popup.style.display = 'inline-block';

   }

   /* Lead Type handle To show Lead Type Based on CLick */
   var flaglead =0;
   const leadTypeHandle =()=>{
        var el = document.getElementById('input2');
        if(el)
        el.remove(); 
        var addedclass =document.getElementsByClassName("addlistOptions");
        if(addedclass.length>=1){
                for(let i = 0;i<addedclass.length;i++){
                    addedclass[i].classList.add("listOptions");
                    addedclass[i].classList.remove("addlistOptions");
                }

        }
       var d1 = document.getElementById("listTypeOpt");
       console.log(d1);
       if(d1){
           if(flaglead===0)
           { 
               d1.style.display="block";
               flaglead =1;
            }
               else{
                   d1.style.display = "none"
               flaglead =0;
           }
        }
    }
    /* Lead value to as Chip */
const leadToChip =(item)=>{
    console.log(item.label);
    let addValue = `Lead Type : ${item.label}`;
    setChipValue([...chipValue,addValue]);
    var leadDiv = document.getElementById("leadtype")
    var d1 = document.getElementById("listTypeOpt");
    if(d1 && leadDiv){
        d1.style.display = "none";
        leadDiv.style.display = "none";
    }
    flaglead =1;
    }



    /* Date Picker */


   const dateHandleSelect=(ranges)=>{
    let startDate = ranges.selection.startDate.toString().split("").splice(4,11).join("");
    let endDate = ranges.selection.endDate.toString().split("").splice(4,11).join("")
  let dateRange = [`Date Range : ${startDate} to ${endDate}`]
    setDateChip([...dateRange]);
   /*  let dtcd=document.getElementById("dateChip");
    dtcd.style.display = "block"; */
    let selectionRangeNew = {
        startDate: ranges.selection.startDate,
        endDate:ranges.selection.endDate,
        key:'selection',
        disabled:false,
        showDateDisplay: true,
    }
    setselectionRange(selectionRangeNew);
    
    /* so that there is no display of the div after setting */
}
 

const dateHandle=()=>{
    var dateDiv = document.getElementById("dateRangePicker");
    
    if(dateDiv)
    if(!dateflag)
    {
    setdateflag(true);
console.log(dateflag)
}
    else{
        
        setdateflag(false);
        console.log(dateflag)
    }
}

    useEffect(() => {
        let flag =1;     
        // Update the document title using the browser API
            var popup = document.getElementById('searchoptions');
            var popupHelp =document.getElementById('searchInput');
            var popupHelp2 = document.getElementById("searchWrapper");
            var button = document.getElementsByTagName("button");
            document.onclick = function(e){
           
                if(e.target.id === 'SearchBoxContainer'|| e.target === button){
   
                    popup.style.display = 'none';
                   
                }
                if(e.target === popup || e.target=== popupHelp||e.target===popupHelp2){
                     popup.style.display = 'inline-block';
                  
                }
                if(e.target=== popupHelp||e.target===popupHelp2){
                    if(flag ===0){
                    flag=1;
                    popup.style.display = 'none';
                   
                }else{
                    flag=0;
                    popup.style.display = 'inline-block';
                   
                }

                }
               
            };
/* Commented until new test passed or failed */
       
        if(activateInput[0]){
            console.log("array of input",activateInput[2]);
            var d1 = document.getElementById(activateInput[1]);
            if(d1!==null)
            d1.insertAdjacentHTML('beforeend', '<input autocomplete = "off" id="input2" />');
            var d2 = document.getElementById("input2");
            if(d2)
            {
            d2.value = activateInput[2];
            d2.select();
            d2.focus();
            d1.classList.remove("listOptions");
           d1.classList.add("addlistOptions");
        }
            setActivateInput([false])
        }
        var dateDiv = document.getElementById("dateRangePicker");
        if(dateDiv)
        if(!dateflag){
            dateDiv.style.display = "none";
        }else {
            dateDiv.style.display = "block";
        }

    },[outclick,activateInput,dateflag]);

    const chipstyle = {
        listStyleType: 'none',
        fontSize:'.8em',
        position:'absolute',
        top: '70.5%',
        left:' 29.5%',
        margin:'0',
        padding:'0',
        display:'flex',
        width:'39%',
        flexWrap:'wrap'
    }
    const liStyle = {
        display:'flex',
        paddingLeft:'1px',
        paddingRight:'1px',
        backgroundColor:'white',/* 
        borderRadius:'8px', */
        margin:'1px',
        color:' #262c5b',
        marginLeft: '7px',
        border: '1px solid #262c5b'
    }



    return (
        <div id = "SearchBoxContainer" className="SearchBoxContainer">
            <button className = "back"><img src ={backArrow} alt = ""/>  Back</button>
            <div id="searchWrapper" className = "SearchBoxWrapper select">    
            <input autoComplete="off" onClick = {handleHide} onKeyDown={handleInputValue1} 
            id = "searchInput" placeholder="Filter (Type something…..)" className="search"/>
            </div> 
            <div className="select2">
            <select className="btn2">  
                    <option>All Leads</option>
                    <option>My Leads</option>
                    <option>Hot Leads</option>
                </select>
            </div>
            <button className = "btn">Search</button>
            <ul style = {chipstyle}>
            {chipValue.map((item,i) =>
             <li key = {i+item}
             style = {liStyle}><p  onClick={() => editChipValue(item)} >{item}</p>
             <button className="btn1" onClick={() => handleDeleteChip(item)}>X</button>
             </li>)}
                {dateChip.map((item)=>
                    <li key  = {item} style = {liStyle}><p onClick={() => editChipValue(item)} >{item}</p>
             <button className="btn1" onClick={() => handleDeleteChip(item)}>X</button>
             </li>
                )}
            </ul> 
            <button className = "nlbtn">New Lead +</button>
            <button className = "imbtn">Import</button>
            <button className = "dwnbtn"><img src ={dwnbtn} alt = "Download"/></button>
            {/* List box appears only when clicking the input area */} 
            
            <div ref={el=>outclick=el} id ="searchoptions" className="searchoptions hide">
            <div className = "SavedBy">
            <p style = {{color:'grey'}}>Recent:</p>
           {/*  {savedBy.map((item,i) =><p className="SavedByValues" key = {i+item}>{item}</p>)} */}
            </div>
            <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '340px',
            overflow: 'scroll',
            marginBottom: '100px',
            overflowX: "hidden",
            

          }}>
<Element name="firstInsideContainer" style={{
              marginBottom: '20px'
            }}>
                
                <div className = "chipDisplayDiv">

                <ul className = "chipstyle">
            {chipValue.map((item,i) =>
             <li className= "chipliststyle"  key = {i+item}>
             <p onClick={() => editChipValue(item)} >{item}</p> 
             <button className="btn1" onClick={() => handleDeleteChip(item)}>X</button>
             </li>)}
             {
                 dateChip.map((item)=>
                    <li id="dateChip" className= "chipliststyle" key  = "dateChip" ><p  onClick={() => editChipValue(item)} >{item}</p>
                    <button className="btn1" onClick={() => handleDeleteChip(item)}>X</button>
                    </li>
                 )
             }
            </ul>   

                </div>
          </Element>

          <Element name="secondInsideContainer" style={{
              marginBottom: '20px'
            }}>
            <ul id = "popup" style = {{listStyleType:"none",display:"inline-block",width:"95%"}}>
            {
            listOptions.map((item)=><li onKeyDown={(e)=>handleInputValue2(e,item)} id ={item} className = "listOptions" key={item} >
                <p onClick={() => handleItemOptions(item)}>{item}</p>
                {/*  list input Button removed until further nortice */}
               {/*  <button id = {item+1} className = "input2btn hide" onClick ={handleOptionValue}><img className = "tickMark"src={tickMark} alt ="ok"/></button> */}
               
                </li>)
            }
           {/* <li onClick={leadTypeHandle} id = "leadtype" className= "listOptions"><p>Lead Type ▼ </p></li> 
           <div id = "listTypeOpt" className = " hide">
           { leadType.map(item=><p onClick={()=>leadToChip(item.label)} key={item.label} className = "listOptions2" >{item.label}</p>)}
           </div> */}
           <li onClick={leadTypeHandle} id = "leadtype" className= "listOptions" ><p>Lead Type</p>
           </li>
         
           <li onClick = {dateHandle} id = "dateType" className = "listOptions"><p>Date Range</p></li>
           
           
            </ul>   
              
          </Element>
              
          </Element>
          <div id = "listTypeOpt" className = "listTypeOpt hide">
           <Select placeholder = "Select Lead Type" onChange = {leadToChip} options={options} />
           </div>
           <div id = "dateRangePicker" className = "dateRangePicker">
           <DateRangePicker 
				ranges={[selectionRange]}
                onChange={dateHandleSelect}
                showDateDisplay={true}
			/>
           </div>
            </div>
        </div>
    )
}

export default SearchBox
