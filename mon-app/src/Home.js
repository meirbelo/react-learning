import { useState } from "react";



const Home = () => {

 //let name ="meir";
 const [name, setName] = useState("meir");
 const [age, setAge] = useState(23);


 const handleClick = (e) => {
  setName('belo')
  setAge(30)
  //name = 'belo';
  //console.log('ninja', e)
 }

 const handleClick2 = (name, e) => {
  console.log('hello' + name, e.target)
 }
 return ( 
  <div className="home">
       <h2>home page</h2>
       <p>{name} is {age} old</p>
       <button onClick={handleClick}>Click me</button>
       <button onClick = { (e) => handleClick2('meir', e)}> Click me 2 </button>
  </div>
  );
}
 
export default Home;