import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Split from './Split';
import FocusInput from './FocusInput';
function App() {
   const title = "welcome to new blog";
  const likes = 50;
   const person = {name : 'meir', age : 23};
   const link = "http://www.google.com";
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <FocusInput />
       <Split />
      {/* video 4 */}
      {/* <div className='content4'>
        <h1>{title}</h1>
        <p> nombre de likes :{likes}</p>
        <p> nombre de likes{person.age}</p>
        <p> nombre de likes{person.name}</p>
        <p>{10}</p>
        <p>{'hi meir'}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>


        <a href={link}>Googe site </a>
      </div> */}
    </div>
  );
}

export default App;
