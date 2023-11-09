import { useState } from "react";
import { AppContext } from "./App";
import { useContext } from "react";



function Home2(){
    const {value,setCount,count,incrementCount} = useContext(AppContext)
    return(
        <>
         {/* <h1>{value}</h1>
        <h2>{value}</h2> */}
        <button onClick={()=>setCount(count+1)}>+</button>
      {count}
        <button onClick={()=>setCount(count-1)}>-</button>
        </>
    )
}
export default Home2