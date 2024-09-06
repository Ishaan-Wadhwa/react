import { useContext } from "react"
import counterContext from "../Context/contextfile"
export default function Button(){
    const counter = useContext(counterContext)
    return (
        <div>
            <button onClick={counter.setCount((prev)=>prev+1)}>Click to increment</button>
        </div>
    )
}