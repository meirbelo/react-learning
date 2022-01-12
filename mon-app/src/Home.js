const Home = () => {

 const handleClick = (e) => {
  console.log('ninja', e)
 }

 const handleClick2 = (name, e) => {
  console.log('hello' + name, e.target)
 }
 return ( 
  <div className="home">
       <h2>home page</h2>
       <button onClick={handleClick}>Click me</button>
       <button onClick = { (e) => handleClick2('meir', e)}> Click me 2 </button>
  </div>
  );
}
 
export default Home;