import Pessoa from "./pessoa";
import Medico from "./medico";
import Enfermeiro from "./enfermeiro";

//HERANÇA: usar informações de "Pessoa" para reaproveitamento de códigos em "Medico/Enfermeiro".
//POLIMORFISMO: a capacidade de uma classe pai ("Pessoa") apontar para classes filhas e executar o método específico para cada ("Medico/Enfermeiro").
const informacoes = (pessoa: Pessoa) => {
    console.log(`Nome da pessoa: ${pessoa.getNome()}`)
    console.log(`CPF da pessoa: ${pessoa.getCpf()}`)
    if(pessoa instanceof Medico){
        console.log(`CRM do medico: ${pessoa.getCrm}`)
    }
    if(pessoa instanceof Enfermeiro)
        console.log(`CRM do enfermeiro: ${pessoa.getCre}`)
}   

let md = new Medico("Arthur", "123.456.789-00", "123456")
let en = new Enfermeiro("Joana", "123.447.789-00", "654321")

console.log(informacoes(md))
console.log(informacoes(en))

//PARA TESTAR: TERMMINAL CMD
// TSC
//NODE ./DESTINO/INDEX.JS