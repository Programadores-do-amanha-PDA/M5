import "./style.css"

export function Button(props) {
    // function somar(parametro1, parametro2){
    //     console.log(parametro1+parametro2);
    // }

    // somar(4,5);
    // somar(42,52);

    // props -> armazenam varios tipos de dados
    // number / string / booleanos

    // number -> somar, subtrair, multiplicar, dividir, verificar
    // string -> concatenar, verificar
    // boolean -> verificar 

    // tipos de dados avanços
    
    // objeto 
    // funcao
    // array

    if(props.age > 18){

    }

    if(props.title != ''){

    }

    if(props.status){

    }
  
    function showLog(){
        console.log("btn-blue")
    }

    return (
        <>
            {/* condicionais no html */}
            {/* utilizando arrow function */}
            {props.type === "yellow" && 
                <button onClick={props.handleClick} className="btn-yellow">
                    <p>{props.title}</p>
                </button>
            }

            {/* utilizando funcao criada no proprio componente */}
            {props.type === "blue" &&
                <button onClick={showLog} className="btn-blue">
                    <p>{props.title}</p>
                </button>
            }

            {/* utilizando funcao que veio como parametro */}
            {props.type === "purple" &&
                <button onClick={props.handleClick} className="btn-purple">
                    <p>{props.title}</p>
                </button>
            }

            {props.type === undefined || null &&
                <button onClick={props.handleClick} className="btn-yellow">
                    <p>{props.title}</p>
                </button>
            }
        </>
    )
}

/* Porque utilizar components
 para reutilizar estruturas em todas as telas e componentes e
 para separar as estruturas e modifica-las de uma forma individual
*/