import React,{ createContext,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Home1 from './Home1'
import Home2 from './Home2'

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0)
  const display = ()=>{
    setCount(count+1)
}


const floater = ()=>{
  if (count===0) {
    stop
  
}else{
  setCount(count-1)
    
}
}
const reset = ()=>{
  setCount(0)
}
const btn = ()=>{
 
}




let myfunction=()=>{
console.log("welcome")


}
function sample(){
  
  return(
    <>
    
    </>
  )
}

  return (
    <>
    <div>
   
    <AppContext.Provider value={{setCount,count}}>
      <Home1/>
  
      <Home float="hello" display={display} floater={floater} reset={reset} count={count}  temp={myfunction()} sam={sample()} />
      
      <Home2/>
        
      </AppContext.Provider>
    </div>
    </>
  )
}

export default App
