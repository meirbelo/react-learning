import { useState } from "react";

const ShowHide = () => {

const [show, setShow] = useState(false);

// console.log(show)

 return (  
<div>
   <textarea onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}></textarea>
   {show ?<div>More info....</div> : null}
</div>

 );
}
 
export default ShowHide;