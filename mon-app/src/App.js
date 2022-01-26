import React , { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Debounce from './Debounce';
import AutoComplete from './AutoComplete';
import Split from './Split';
function App() {
   const title = "welcome to new blog";
  const likes = 50;
   const person = {name : 'meir', age : 23};
   const link = "http://www.google.com";
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Debounce/>
       <AutoComplete/>
       <Split />
    </div>
  );
}

export default App;
