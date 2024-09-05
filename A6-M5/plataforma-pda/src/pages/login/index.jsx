import { Button } from "../../components/button";
import "./style.css";

export default function Login(){
    return (
        <>
            <form action="">
                <label>name</label>
                <input type="text" placeholder="digite um nome"/>
                <label htmlFor="">email</label>
                <input type="text" placeholder="digite um email"/>
                <label htmlFor="">password</label>
                <input type="password" placeholder="digite uma senha"/>
                <Button type={"purple"} title={"cadastrar"} handleClick={(e)=> {
                    e.preventDefault();
                    console.log("usuario cadastrado com sucesso")
                }}/>
            </form>
        </>
    )
}