import "./style.css"
import batatinha from "../../assets/pda-logo.png"
import { Button } from "../button"

export function Header(){
  const data = {
    type: 'purple',
    title: 'patrocinadores'
  }

  function handleLog(){
    console.log("function header")
  }

  return (
    <>
      <div className="container">
        <img src={batatinha} alt="icone-programadores-do-amanha" />
        <h1>Programadores do amanha</h1>

        <ul className="list">
            <li><Button type={"yellow"} title={"saiba mais"}/></li>
            <li><Button type={"blue"} title={"historias"}/></li>
            <li><Button handleClick={handleLog} type={"purple"} title={"patrocinadores"}/></li>
        </ul>
      </div>
    </>
  )
}