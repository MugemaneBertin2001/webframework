import React, { useState } from "react";
import "../style/style.css"
const Payment=()=>
{
const [finalFee,setFinalFee]=useState(0)
const [discout,setDiscount]=useState(0)
const [product,setProduct]=useState("")
const [price,setPrice]=useState("")


const handleInput=  (event)=>{
    setProduct(event.target.value)  
}
const handlePrice=  (event)=>{
    setPrice(event.target.value)  

    
}
const calcDiscount= function()
{
        setFinalFee(price-(price*discout/100))
  
   
}
const dis=()=>{
    if(price>=10000)
    {
        setDiscount(15)
        
    }
    else{

        setDiscount(0)
    
        
    }



}



    

    return(
<div className="div">
<form>
<div> 
<label>Product Name:</label>
<br />
<input type="text" onChange={handleInput} value={product} />
</div>
<div>
<label>Price:</label>
<br />
<input type="text" onKeyUp={dis} onChange={handlePrice} value={price} />
</div>
<div>
<button type="button" onClick={calcDiscount} >Calculate</button>

</div>


</form>

<div className="paycheck">
<p>Payment Info</p>
<p>Product:{product}</p>
<p>Price:{price}</p>
<p>Discount:{discout} <sup>{discout}%</sup></p>
<p>Final Fee:{finalFee} <sup>Rwf</sup></p>



</div>

</div>
 )
  

}
export default Payment