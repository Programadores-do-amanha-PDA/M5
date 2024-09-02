import "./style.css"

export function Button(props) {
    return (
        <>
          {/* condicionais no html */}
            {props.type === "yellow" &&
                <button className="btn-yellow">{props.title}</button>
            }

            {props.type === "blue" &&
                <button className="btn-blue">{props.title}</button>
            }

            {props.type === "purple" &&
                <button className="btn-purple">{props.title}</button>
            }

            {props.type === undefined || null &&
                <button className="btn-yellow">{props.title}</button>
            }
        </>
    )
}

/* atividade mao na massa 
  voces irão criar um projeto onde na tela home terá 3 componentes renderizados
  1 - Header
  2 - Tabela
  3 - Footer

  regras voces deverão criar os componentes de acordo com o que foi falado em aula
  


*/