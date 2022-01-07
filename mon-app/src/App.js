import './App.css';
import React from 'react';
function App() {
   const title = "welcome to new blog";
  const likes = 50;
   const person = {name : 'meir', age : 23};
   const link = "http://www.google.com";
  return (
    <div className="App">
      <div className='content'>
        <h1>{title}</h1>
        <p> nombre de likes :{likes}</p>
        <p> nombre de likes{person.age}</p>
        <p> nombre de likes{person.name}</p>
        <p>{10}</p>
        <p>{'hi meir'}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>


        <a href={link}>Googe site </a>
      </div>
    </div>
  );
}

export default App;
