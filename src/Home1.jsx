import { useContext } from "react"
import { AppContext } from "./App"


function Home1(){
    const{count}=useContext(AppContext)
    return(
        <>
        <h1 >head {count}</h1>
        </>
    )
}
export default Home1