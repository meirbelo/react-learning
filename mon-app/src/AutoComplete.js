import React , { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.css";


function AutoComplete() {
 const [users, setusers] = useState([]);
 const [text, setText] = useState('');
 const [suggestions, setsuggestions] = useState([]);

 useEffect(() => {
  const loadUsers = async() => {
   const response = await axios.get('https://reqres.in/api/users');
   setusers(response.data.data)
  }
  loadUsers()

 }, [])

 const  onSuggestHandler = (text) => {
  setText(text)
  setsuggestions([])
 }

  const onChangeHandler = (text) => {
    console.log(users)
   let matches = []
   if(text.length> 0) {
     matches = users.filter(user => {
      const regex = new RegExp(`${text}`, "gi")
      return user.email.match(regex)
     })
   }
   setsuggestions(matches)
   setText(text)
  
  }

 return(
 <div className="Content">
  <input type='text' onChange={e => onChangeHandler(e.target.value)} value={text}/>
  {suggestions && suggestions.map((suggestion, i) => 
  <div key={i} className=' suggestion col-md-12 justify-content-md-center' 
  onClick={() => onSuggestHandler(suggestion.email)}>{suggestion.email}</div>
 )}
 </div>
 )
}
export default AutoComplete;