import { useContext } from "react";
import counterContext from "../Context/contextfile";
export function Display(){
    const  val = useContext(counterContext)
    return (
        <h1>{val.count}</h1>
    );
}