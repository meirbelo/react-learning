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


 //vdeo 10
 const [blogs, setBlogs] = useState([
  { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
 ])
 return ( 
  <div className="home">
       <h2>home page</h2>
       <p>{name} is {age} old</p>
       <button onClick={handleClick}>Click me</button>
       <button onClick = { (e) => handleClick2('meir', e)}> Click me 2 </button>

       {blogs.map((blog) => (
       <div className="blog-preview" key={blog.id}>
            <h2>ecrit par{blog.title}</h2>
            <p> ecrit par {blog.author}</p>

       </div>
       ))}

  </div>
  );
}
 
export default Home;