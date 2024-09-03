import { Button } from "../../components/button"
import "./style.css"

export default function Home(){
    function somar(){
        console.log(12+4)
    }
    return(
        <>
         <h1>Home</h1>
         <Button type={"purple"} title={"somadsasdr"} handleClick={somar}/>
        </>
    )
}