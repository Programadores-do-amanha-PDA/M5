import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import "./style.css";
import axios from "axios";
import { CardPersonagens } from "../../components/cardPersonagens";
import iconEmpresaria from "../../assets/icon-empresaria.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //const [user, setUser] = useState({name: "", email: "", password: ""});

  async function register() {
    const { data } = await axios.post("http://localhost:4000/user", {
      username: username,
    });

    console.log(data);
    // const result = await fetch("url:localhost", {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name, email, password
    //     })
    // })
  }

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const { data } = await axios.get("http://localhost:4000/user");
    console.log(data);
    setUser(data.users);
  }

  return (
    <>
      <form action="">
        <label>username</label>
        <input
          type="text"
          onChange={(input) => setUsername(input.target.value)}
          placeholder="digite um username"
        />
        {/* <label htmlFor="">email</label>
                <input type="text" onChange={(input)=> setEmail(input.target.value)} placeholder="digite um email"/>
                <label htmlFor="">password</label>
                <input type="password" onChange={(input)=> setPassword(input.target.value)} placeholder="digite uma senha"/> */}
        <Button
          type={"purple"}
          title={"cadastrar"}
          handleClick={(e) => {
            e.preventDefault();
            register();
          }}
        />
        <Button
          type={"purple"}
          title={"buscar"}
          handleClick={(e) => {
            e.preventDefault();
            getUser();
          }}
        />
      </form>
      {
        user.map((item) => (
          <CardPersonagens
            id={item.id}
            name={item.username}
            firstInfo={item.createdAt}
            secondInfo={`${item.statusOn}`}
            image={iconEmpresaria}
          />
        ))}
    </>
  );
}
