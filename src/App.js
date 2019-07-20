import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SearchBox from './components/searchBox/SearchBox';
import DataT from './components/dataTable/dataTable.component.jsx';


function App() {
  
  return (
    <div className="App">
    <div>
    <Navbar/>
    </div>
    <SearchBox/>
    <DataT/>
     <footer>
      <p>Under Construction</p>
     </footer>
    </div>
  );
}

export default App;
