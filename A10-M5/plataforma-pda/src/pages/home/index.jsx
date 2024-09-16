import { useEffect, useState } from "react";
import { Button } from "../../components/button"
import "./style.css";
import { CardPersonagens } from "../../components/cardPersonagens";

export default function Home(){
    const [number, setNumber] = useState(0);
    const [cep, setCep] = useState();
    const [fakeCep, setFakeCep] = useState();

    const [balance, setBalance] = useState(1000);
    const [deposit, setDeposit] = useState(0);
    const [withdraw, setWithdraw] = useState(0);

    const [inputDeposit, setInputDeposit] = useState(0);
    const [inputWithdraw, setInputWithdraw] = useState(0);

    const [assinatura, setAssinatura] = useState(false) ;

    function aumentar(){
        // number = number + 1;
        setNumber(number + 1)
        console.log(number)
    }

    // botao de diminuir
    // botao de aumentar
    // botao de multiplicar por 2
    // botao de dividir por 2

    // apresentar o resultado na tela

    // quando utilizamos o useState -> quando queremos criar uma variavel
    // que irá ser alterada conforme a interação do usuario, entao onde a variavel for chamada
    // haverá alteração quando o usuario inserir um valor diferente

    // quando utilizamos o useEffect -> quando eu quero observar uma variavel e caso 
    // essa variavel sofra uma alteração executamos um código

    // useEffect(()=> {
    //     console.log("numero atualizado " + number);
    // },[number])

    // useEffect(()=> {
    //     fetch(`http://viacep.com.br/ws/${cep}/json/`)
    //     .then(res=> res.json())
    //     .then(data => console.log(data))
    // },[cep])

    // quando queremos executar uma função 
    // quando uma variavel for alterada 

    // quando deposito/deposit mudar execute uma 
    // função que vai alterar balance
    // useEffect(()=> {
    //     // saldo = saldo + deposito
    //     // balance = balance + deposit
    //     setBalance(balance + deposit)
    // },[deposit])

    // quando withdraw/saque mudar execute uma 
    // função que vai alterar balance
    // useEffect(()=> {
    //     // editando o saldo = saldo anterior - valor do saque
    //     setBalance(balance - withdraw)
    // },[withdraw])

    // observe a variavel cep e executa uma função caso seu valor seja alterado
   
    // tag
    // btn.addEventListenner("click", ()=> {})

    // variavel
    // cep.addEventListenner("change", ()=> {})

    return(
        <>
         {/* <CardPersonagens/> */}
         {/* <Button type={"purple"} title={"logar"} handleClick={()=> setStatus(!status)}/>
         
         <h1>Home</h1>
         <Button type={"purple"} title={"aumentar"} handleClick={aumentar}/>
         
         <input type="text" placeholder="digite seu cep" onChange={(input)=> setFakeCep(input.target.value)} />
         <Button type={"purple"} title={"buscar localização"} handleClick={()=> {setCep(fakeCep)}}/>

         {/* <h1>saldo atual: <span style={{color: balance > 500 ? "green" : "red"}}>{balance}</span></h1> */}
{/*          
         {balance > 500 ? 
         <h1>saldo atual: <span style={{color: "green"}}>{balance}</span></h1>
           :
         <h1>saldo atual: <span style={{color: "red"}}>{balance}</span></h1>
         }

         <input type="text" onChange={(input)=> setInputDeposit(Number(input.target.value))} placeholder="digite o valor do deposito"/>
         <Button type={"purple"} title={"depositar"} handleClick={()=> {setDeposit(inputDeposit)}}/>

         <input type="text" onChange={(input)=> setInputWithdraw(Number(input.target.value))} placeholder="digite o valor do saque"/>
         <Button type={"purple"} title={"sacar"} handleClick={()=> {setWithdraw(inputWithdraw)}}/> */} 

          
        </>
    )
}