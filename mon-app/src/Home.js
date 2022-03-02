import { useState , useEffect} from "react";
import BlogList from "./BlogList";



const Home = () => {

 //let name ="meir";
//  const [name, setName] = useState("meir");
 const [age, setAge] = useState(23);


 const handleClick = (e) => {
//  setName('belo')
  setAge(30)
  //name = 'belo';
  //console.log('ninja', e)
 }

 const handleClick2 = (name, e) => {
  console.log('hello' + name, e.target)
 }


 //vdeo 10
 const [blogs, setBlogs] = useState(null)
 const [name, setName] = useState('Mario')

 useEffect(() => {
  fetch('http://localhost:8000/blogs')
  .then(res => {
    return res.json();
  })
  .then(data=> {
  setBlogs(data)
  })
 },[])

 return ( 
  <div className="home">
    <div></div>
       <h2>home page</h2>
       <p>{name} is {age} old</p>
       <button onClick={handleClick}>Click me</button>
       <button onClick = { (e) => handleClick2('meir', e)}> Click me 2 </button>
    {blogs && <BlogList  blogs={blogs} title='all blog'/>}
       <button onClick={()=> setName('guili')}>change name to luigi</button>
       <p>{name}</p>
  </div>
  );
}
 
export default Home;