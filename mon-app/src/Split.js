const Split = () => {
 let str = 'name lastname'
let sp = str.split(' ')
const double = sp.map((spUnit) => spUnit * 2)
if(str.indexOf(' ') > 0 ){
console.log('nedd to split')
}
else {
 //code sample
}

for(let i = 0 ; sp > i; i++) {
console.log(sp)
}
 return ( 
<div>
 <h1> Split a string into variables
</h1>
</div>

  );
}
 
export default Split;