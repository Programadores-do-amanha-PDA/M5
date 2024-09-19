import { useEffect, useState } from "react";
import { Button } from "../../components/button";
import "./style.css";
import axios from "axios";
import { CardPersonagens } from "../../components/cardPersonagens";
import iconEmpresaria from "../../assets/icon-empresaria.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("")

  // consumindo endpoint de criação POST
  async function registerUser() {
    setUsername(inputUsername);
    const { data } = await axios.post("http://localhost:4000/user", {
      username: username,
    });
  }

  // consumindo endpoint de leitura/busca GET
  async function searchUser() {
    const { data } = await axios.get("http://localhost:4000/user");
    console.log(data);
    setUser(data.users);
  }

  // consumindo endpoint de deleção DELETE
  async function deleteUser(id){
    console.log(id)
    const { data } = await axios.delete(`http://localhost:4000/user/${id}`);
    console.log(data);
    const { message } = data;
    setMessage(message)
  }

  useEffect(()=> {
    searchUser();
  }, [username])

  useEffect(()=> {
    alert(message)
  },[message]);

  useEffect(() => {
    searchUser();
  }, []);
  

  return (
    <>
      <form action="">
        <label>username</label>
        <input
          type="text"
          onChange={(input) => setInputUsername(input.target.value)}
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
            registerUser();
          }}
        />
        <Button
          type={"purple"}
          title={"buscar"}
          handleClick={(e) => {
            e.preventDefault();
            searchUser();
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
            handleClickDelete={deleteUser(item.id)}
          />
        ))
      }
    </>
  );
}
