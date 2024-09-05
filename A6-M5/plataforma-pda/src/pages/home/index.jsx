import { useState } from "react";
import { Button } from "../../components/button"
import "./style.css";

export default function Home(){
    const [number, setNumber] = useState(0);
    const [title, setTitle] = useState("Home");

    function aumentar(){
        // number = number + 1;
        setNumber(number + 1)
        console.log(number)
    }

    // botao de diminuir
    // botao de aumentar
    // botao de multiplicar por 2
    // botao de dividir por 2

    // apresentar o resultado na tela

    return(
        <>
         <h1>Home</h1>
         <Button type={"purple"} title={"aumentar"} handleClick={aumentar}/>
         <p>numero: {number}</p>
        </>
    )
}