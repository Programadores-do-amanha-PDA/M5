import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "../../components/button";

export default function Details() {
  const [user, setUser] = useState({ id: "" });
  const { id } = useParams();

  const navigate = useNavigate();

  async function getUserById() {
    const { data } = await axios.get(`http://localhost:4000/user/${id}`);
    console.log(data.user);
    setUser(data.user);
  }

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <>
      <Button type={"yellow"} title={"voltar"} handleClick={()=> {navigate("/login")}}/>
      <h1>Details</h1>
      {user.id && 
      <>
       <h2>{user.id}</h2>
       <h2>{user.username}</h2>
       <h2>{user.statusOn.toString()}</h2>
       <h2>{user.createdAt}</h2>
       <h2>{user.updatedAt}</h2>
      </>
      }
    </>
  );
}
