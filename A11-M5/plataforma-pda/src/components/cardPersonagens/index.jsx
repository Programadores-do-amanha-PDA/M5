import { useEffect, useState } from "react";
import "./style.css";
import { Button } from "../button";

// criar uma estrutura de cards para apresentar os personagens
// do https://rickandmortyapi.com/ na tela
// API DO POKEMON

// criar uma estrutura de cards/tabela para apresentar os dados
// dos usuarios de uma api local ou deploy já feitos

// fazer requisição para endpoints que retornem LISTAS

export function CardPersonagens(props) {
  // primeiro criamos uma variavel para armazenar uma lista
  // const [listPerson, setListPerson] = useState([]);
  // const [listUser, setListUser] = useState([]);

  // const [name, setName] = useState("Beatriz");
  //   let name = ""

  //   name = "Beatriz";

  // segundo criamos um useEffect para popular a lista
  //   useEffect(() => {
  //     fetch(`https://first-orm.onrender.com/user`).then((res) =>
  //       res.json().then((data) => setListUser(data))
  //     );
  //   }, []);

  // useEffect(() => {
  //   fetch(`http://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265`)
  //     // "{"name": "Beatriz"}" -> transformando nosso json em um objeto javascript
  //     .then((res) => res.json())
  //     // {name: "Beatriz"}
  //     //              listPerson = {name: "Beatriz"}
  //     .then((data) => setListPerson(data));
  // }, []);

  return (
    <>
      <main>
        {/* acessa a variavel que armazena a lista e fazemos um map */}
        {/* {listUser.map((user) => (
          <>
            <h1>{user.name}</h1>
          </>
        ))} */}

        <div key={props.id} className="card">
          <img src={props.image} className="image" />
          <h1>{props.name}</h1>
          <div className="infos">
            <p className="firstInfo">{props.firstInfo}</p>
            <p className="secondInfo">{props.secondInfo}</p>
          </div>
          <Button
            type={"yellow"}
            title={"deletar"}
            handleClick={(e) => {
              e.preventDefault();
              props.handleClickDelete();
            }}
          />
        </div>
      </main>
    </>
  );
}
