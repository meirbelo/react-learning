import React , { useRef, useEffect } from 'react'
export default function FocusInput() {
 useEffect(() => {
    inputEl.current.focus();
 })
 const inputEl = useRef(null);
  return (
    <div>FocusInput
     <input type='text' ref={inputEl}   />
    
     </div>
  )
  }