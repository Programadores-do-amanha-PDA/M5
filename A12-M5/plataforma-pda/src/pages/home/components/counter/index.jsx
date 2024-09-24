import React from "react";
import { Button } from "../../../../components/button";

export class Counter extends React.Component {
  // inicialização do componente -> definindo estados(variaveis)
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      dedinho: true,
      olhinhos_azuis: false,
    };
  }

  aumentar() {
    this.setState({ counter: this.state.counter + 1 });
  }

  // nascimento do nosso componente
  componentDidMount(){
    console.log("montando componente")
  }

  // vida, aprendizados, as fases, as mudanças
  componentDidUpdate(prevState){
    if(this.state.counter != prevState.counter){
        console.log("atualizando componente: "+ this.state.counter);
    }
  }

  // falecimento do componente, desmontagem
  componentWillUnmount(){
     console.log("desmontando componente")
     this.setState({counter: 0})
  }

  render() {
    return (
      <>
        <h1>{this.props.title}: {this.state.counter}</h1>
        <Button
          title={"aumentar"}
          type={"yellow"}
          handleClick={() => {
            this.aumentar();
          }}
        />
      </>
    );
  }
}

// export function Counter(){
//     return (
//         <>
//          <h1>Counter</h1>
//         </>
//     )
// }
