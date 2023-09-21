import { useState } from "react";
export default function Form({onAddItems})
{
  const[description,setDescription]=useState("");
  const[quantity,setQuantity]=useState(1);
  



  
  function handleSubmit(e)
  {
      e.preventDefault();
      
      console.log(description);

      if(!description) return
      const newItem={ id:Date.now(), description,quantity,packed:false}
      onAddItems(newItem)
    
      setDescription("");
      setQuantity(1);
     
  }
    return( 
    <form className="add-form" onSubmit={handleSubmit}>
     <h3>What do you need for your trip?</h3>
     <select name="select" value={quantity} onChange={(e)=>setQuantity(Number( e.target.value ))}>
     {  Array.from( {length:20},(_,i )=> i + 1 ).map( (i) => <option value={i} key={i}>{ i }  </option>   )  }
     </select>
     <input name="input" autoFocus type="text" autoComplete="off" placeholder="Item.." value={description} onChange={(e)=>setDescription(e.target.value)}/>
     <button >Add</button>
    </form>

    );
}