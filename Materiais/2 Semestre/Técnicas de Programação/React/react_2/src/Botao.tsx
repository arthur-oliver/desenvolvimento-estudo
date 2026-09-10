import { useState } from "react"

function Botao(){
    const [valor, setValor] = useState(0) //para função não existe 'state' somente 'props' - por isso usa-se 'useState'  para sintetizar essa função de estado

    return(
        <>
            <button onClick={() =>{
                setValor(valor + 1)
                alert('foi clicado!')
            }}>Clique aqui para somar 1! valor: {valor}</button>
            <button onClick={() =>{
                setValor(valor - valor)
                alert('foi clicado!')
            }}>Clique aqui para resetar!</button>
        </>

    )
}
export default Botao