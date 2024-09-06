import { useState } from "react";
import { Button } from "../../components/button";
import "./style.css";

export default function Login(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [user, setUser] = useState({name: "", email: "", password: ""});

    async function register(){
        const result = await fetch("url:localhost", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, password
            })
        })
    }

    return (
        <>
            <form action="">
                <label>name</label>
                <input type="text" onChange={(input)=> setName(input.target.value)} placeholder="digite um nome"/>
                <label htmlFor="">email</label>
                <input type="text" onChange={(input)=> setEmail(input.target.value)} placeholder="digite um email"/>
                <label htmlFor="">password</label>
                <input type="password" onChange={(input)=> setPassword(input.target.value)} placeholder="digite uma senha"/>
                <Button type={"purple"} title={"cadastrar"} handleClick={(e)=> {
                    e.preventDefault();
                    register()
                    console.log("usuario cadastrado com sucesso", {name, email, password})
                }}/>
            </form>
        </>
    )
}