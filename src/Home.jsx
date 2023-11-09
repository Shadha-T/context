 import { useState } from "react"
import Home1 from "./Home1"


 function Home(props){

 const increment=()=>{
  props.display()
  }


  const decrement=()=>{
  props.floater()
  }

  const reset=()=>{
  props.reset()
  }

  const btn=()=>{
    props.btn()
  }


  const [ color , setColor ] = useState("white")
  const change = color =>{
    setColor(color="grey")
    document.body.style.backgroundColor = color
  }




    return(
        <>

        <h1>{props.float}</h1>
        <h2>{props.sam}</h2>
        {/* <h1>count {props.count}</h1> */}
        <h3 onClick={increment}>+</h3>{props.count}
        <h3 onClick={decrement}>-</h3> 
        <button onClick={reset}>Reset</button>
        <button onClick={change}>change</button>
        
        

      
        
        
        
        </>
    )
 }
 export default Home